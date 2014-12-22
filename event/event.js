/**
 * 计算位置，角度
 */


 // 获取元素的大小

 var plot = document.querySelector(".plot"),
     offset = plot.offsetWidth / 2,
     pressed = false,
     start = 0,x = 0 ,y = 0,
     end = 0,ex = 0,ey = 0, mx = 0,my = 0,
     duration = 0 ,dist = 0, angle = 0;

 // 绑定事件
 document.addEventListener('mousedown', mousedown, false);
 document.addEventListener('mouseup', mouseup, false);
 document.addEventListener('mousemove', mousemove, false);

 function mousedown(ev){
   if(start == 0 && x == 0 && y == 0){
     start = ev.timeStamp;
     x = ev.clientX;
     y = ev.clientY;
     moveplot(x,y);
     pressed = true;
   }
 }


 function mouseup(ev){
   end = ev.timeStamp;
   duration = end - start;

   ex = ev.clientX;
   ey = ev.clientY;

   mx = ex - x;
   my = ex - y;

   dist = Math.sqrt(mx*mx + my * my);

   // why?
   start = x = y = 0;
   pressed = false;

   angle = Math.atan2( my, mx ) * 180 / Math.PI;


 }

 function mousemove (ev) {
   if (pressed) {
     moveplot(ev.pageX, ev.pageY);
   }
 }
 function twofloat(val) {
   return Math.round((val*100))/100;
 }
 function moveplot(x, y) {
   plot.style.left = (x - offset) + 'px';
   plot.style.top = (y - offset) + 'px';
 }
