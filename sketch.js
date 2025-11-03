let meter,calculate,ans=[];

function setup() {
  createCanvas(displayWidth,displayHeight);

  meter = createInput(0,"number");
  meter.position(20,100);
  calculate = createButton("Calculate");
  calculate.position(20,150);
  calculate.mousePressed(()=>{
    answer();
  });
  text(500,500,"abcd")
}

function draw() {
  background(150);
  for(let i=0;i<ans.length;i++) {
    ans[i].show();
  }
  console.log(ans);
}

function answer() {
  for(let i=0;i<ans.length;i++) {
    ans[i].hide();
  }
  ans=[];
  let m = meter.value();
  let a1 = floor(m*100/220);
  let a2 = floor(m*100/210);
  let d=1;
  let t = (m*100-(a1*220));

  let p = createP("Wastage for 220 cm cut is:- "+t+" cm ("+a1+" pc)");
  p.position(300,90);
  p.hide();
  ans.push(p);
  //console.log(a2-a1);

  if((a2-a1)>=1) {
    for(let i = 220;i>=210;i--) {
      //console.log(((floor(m*100/i))-a1),i);
      if(((floor(m*100/i))-a1)==d) {
        let a3 = (floor(m*100/i));
        let t2 = (m*100-(a3*i));
        let p1 = createP("Wastage for "+i+" cm cut is:- "+t2+" cm ("+a3+" pc)");
        p1.position(300,90+d*50);
        p1.hide();
        ans.push(p1);
        d++;
      }
    }
  }
}