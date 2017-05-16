<template>
  <el-col :span="10" :offset="7" class="contentWrap">
    <el-card class="box-card" :body-style="{ padding: '20px 0px' }">
      <div slot="header">
        <span>第 {{current+1}} 题</span>
        <p style="line-height: 36px;">{{question.topic}}</p>
      </div>
      <div class="item">
        <el-radio class="radio" v-model="radio" label="a"> {{question.a}}</el-radio>
      </div>
      <div class="item">
        <el-radio class="radio" v-model="radio" label="b"> {{question.b}}</el-radio>
      </div>
      <div class="item">
        <el-radio class="radio" v-model="radio" label="c"> {{question.c}}</el-radio>
      </div>
      <div class="item">
        <el-radio class="radio" v-model="radio" label="d"> {{question.d}}</el-radio>
      </div>
      <div class="operate">
        <el-button class="button" icon="arrow-left" @click="pre" :disabled="current == list[0]">上一题</el-button>
        <el-button class="button" type="primary" @click="onSubmit" v-if="current == list[list.length-1]" style="margin-left:100px;">交卷</el-button>
        <el-button type="primary" class="btn_r" @click="next" :disabled="current == list[list.length-1]">下一题
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import bus from '../../bus'
export default {
  name: 'demo',
  data() {
    return {
      radio: '',
      list: [],
      current: 0,
      radio_list: [],
      batch_id: '',
      question: {
        id: '',
        a: '',
        b: '',
        c: '',
        d: '',
        topic: '',
      }
    }
  },
  methods: {
    onSubmit() {
      this.radio_list[this.current] = this.radio;
      this.radio = "";
      let self = this;
      let data = {};
      data.qid = [];
      data.ol = self.radio_list;
      data.name = localStorage.getItem('name')
      data.batch_id = self.batch_id;
      for (let i = 0; i < self.data.length; i++) {
        data.qid.push(self.data[i].id)
      }

      self.axios.post('/question/send', { data: data })
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    pre() {
      this.radio = this.radio_list[this.current - 1];
      this.current--;
      this.show_data(this.current)
    },
    next() {
      this.radio_list[this.current] = this.radio;
      this.radio = "";
      this.current++;
      this.show_data(this.current)
    },
    get_question(batch_id) {
      let self = this;
      self.axios.get('question/get/' + batch_id + '/')
        .then(function (response) {
          console.log(response.data);
          self.data = response.data;
          console.log(self.batch_id)
          for (let i = 0; i < response.data.length; i++) {
            self.list.push(i)
          };
          self.show_data(self.current)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    show_data(idx) {
      let self = this;
      self.question.id = self.data[idx].id;
      self.question.topic = self.data[idx].topic;
      self.question.a = self.data[idx].a;
      self.question.b = self.data[idx].b;
      self.question.c = self.data[idx].c;
      self.question.d = self.data[idx].d;
    },
  },
  mounted() {
    let self = this;
    function get_batch_info() {
      if (localStorage.getItem('name') == null) {
        self.$confirm('您尚未登陆,是否要去登陆?', '提示', {
          confirmButtonText: '我再看看',
          cancelButtonText: '去登陆',
          type: 'warning'
        }).then(() => {
          self.$router.push('/user')
        }).catch(() => {
          self.$router.push('/user/login')
        });
      } else {
        self.axios.get('question/status')
          .then(function (response) {
            console.log(response.data)
            if (response.data.status == 10009) {
              self.$alert('没有可以参加的考试批次,点击确定返回主页面', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  self.$router.push('/user')
                }
              });
            } else {
              console.log(response.data)
              // self.pre();
              self.get_question(response.data.batch_id);
              self.batch_id = response.data.batch_id;
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    };
    get_batch_info();
  }
};
</script>
<style scoped>
.item {
  font-size: 14px;
  padding: 10px 20px;
}

.box-card {
  text-align: left;
  margin: 50px 0;
}

.contentWrap {
  float: none;
}

.operate {
  margin-top: 20px;
  padding: 20px 50px 0 50px;
  border-top: 1px solid #d1dbe5;
}

.btn_r {
  float: right;
}
</style>
