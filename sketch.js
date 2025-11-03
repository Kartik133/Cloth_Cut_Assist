let meter,cut,calculate,ans=[];

function setup() {
  createCanvas(displayWidth,displayHeight);
  let pf1 = createP("METER");
  pf1.position(20,55);
  let pf2 = createP("CUT");
  pf2.position(20,95);
  meter = createInput(0,"number");
  meter.position(100,70);
  cut = createInput(0,"number");
  cut.position(100,110);
  calculate = createButton("Calculate");
  calculate.position(100,150);
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
}

function answer() {
  for(let i=0;i<ans.length;i++) {
    ans[i].hide();
  }
  ans=[];
  let m = (meter.value());
  let c = ((cut.value())*100).toFixed(2);
  let a1 = floor(m*100/c);
  let a2 = floor(m*100/(c-10)); 
  let d=1;
  let t = (m*100-(a1*c)).toFixed(2);

  let p = createP("Wastage for "+c+" cm cut is:- "+t+" cm ("+a1+" pc)");
  p.position(300,55);
  p.hide();
  ans.push(p);
  //console.log(a2-a1);

  if((a2-a1)>=1) {
    for(let i = c;i>=(c-10);i--) {
      if(((floor(m*100/i))-a1)==d) {
        let a3 = (floor(m*100/i));
        let t2 = ((m*100-(a3*i))).toFixed(2);
        let p1 = createP("Wastage for "+i+" cm cut is:- "+t2+" cm ("+a3+" pc)");
        p1.position(300,55+d*40);
        p1.hide();
        ans.push(p1);
        d++;
      }
    }
  }
}