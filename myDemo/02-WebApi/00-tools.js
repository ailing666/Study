/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2020-05-02 20:42:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-05-02 20:44:00
 */
/**
 * @name: 获得元素的样式属性
 * @test: test font
 * @msg: 
 * @param {元素} dom
 * @param {属性名} attr
 * @return: 这个属性对应的样式：字符串且带单位
 */
function getStyle(elm, attr) {
  return window.getComputedStyle(elm)[attr];
}