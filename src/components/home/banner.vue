<template>
  <el-carousel height="450px">
    <el-carousel-item v-for="item in bgColor" :key="item.id" v-bind:style="{background:item.hex}">
      <p v-bind:style="{color:item.re}">
        </{{item.color}}>
      </p>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
let bgColor = [{
  color: 'blue',
  hex: '#0000ff',
  re: '#fff'
}, {
  color: 'yellow',
  hex: '#ffff00',
  re: '#2c3e50'
}, {
  color: 'black',
  hex: '#000',
  re: '#fff'
}, {
  color: 'pink',
  hex: '#ffc0cb',
  re: '#2c3e50'
}, {
  color: 'green',
  hex: '#008000',
  re: '#000'
},];
let reverse = function (value) {
  return value.split('').reverse().join('');
};
export default {
  data() {
    return {
      bgColor,
    }
  },
  filters: {
    reverse,
  }
}

</script>

<style scoped>
@import url("../../../node_modules/element-ui/lib/theme-default/index.css");
.el-carousel__item {
  display: table;
}

p {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: 900;
  display: table-cell;
  vertical-align: middle;
}
</style>
