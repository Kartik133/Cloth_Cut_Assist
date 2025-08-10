let baleno;
let noofrolls;
let submitBtn;
let inputBoxes = [];
let paragraph1,paragraph2,paragraph3,paragraph4,paragraph5,paragraph6;
let printbtn,savebtn;

function setup() {
  noCanvas();

  baleno = createInput(0);
  baleno.position(150,60);
  paragraph1 = createP("Bale No.");
  paragraph1.position(20,47.5);
  noofrolls = createInput(0,"number");
  noofrolls.position(150,100);
  noofrolls.attribute('type', 'number');
  noofrolls.attribute('min', '1');
  paragraph2 = createP("No. of Rolls");
  paragraph2.position(20,87.5);
  paragraph3 = createP("Roll Size");
  paragraph3.style("font-weight","bold");
  paragraph3.position(205,127.5);
  paragraph4 = createP("1st Priority Cut");
  paragraph4.position(435,127.5);
  paragraph4.style("font-weight","bold");
  paragraph5 = createP("2nd Priority Cut");
  paragraph5.position(685,127.5);
  paragraph5.style("font-weight","bold");
  paragraph6 = createP("3rd Priority Cut");
  paragraph6.style("font-weight","bold");
  paragraph6.position(935,127.5);
  paragraph7 = createP("Wastage");
  paragraph7.style("font-weight","bold");
  paragraph7.position(1230,127.5);
  paragraph8 = createP("Total Production");
  paragraph8.style("font-weight","bold");
  paragraph8.position(1380,127.5);
  paragraph3.hide();
  paragraph4.hide();
  paragraph5.hide();
  paragraph6.hide();
  paragraph7.hide();
  paragraph8.hide();


  printbtn = createButton("print");
  savebtn = createButton("save");
  savebtn.hide();
  printbtn.hide();

  // Button to generate textboxes
  submitBtn = createButton("Submit");
  submitBtn.position(150,140);
  submitBtn.mousePressed(createTextboxes);
}

function createTextboxes() {
  submitBtn.hide();
  paragraph3.show();
  paragraph4.show();
  paragraph5.show();
  paragraph6.show();
  paragraph7.show();
  paragraph8.show();

  inputBoxes = [];

  let count = int(noofrolls.value());
  
  for (let i = 0; i < 4*count; i++) {
    let box = createInput(0,"number");
    inputBoxes.push(box);
    if(i%4-3==0) {
      let btn = createButton("Calculate");
      btn.mousePressed(() => {
      buttonClicked((i+1)/4);
      });
      inputBoxes.push(btn);
    }
  }

  for(let i = 0;i<count;i++) {
    let para = createP("Roll "+(i+1));
    para.position(20,167.5+i*100);
    inputBoxes[5*i].position(150,180+i*100);
    inputBoxes[5*i+1].position(400,180+i*100);
    inputBoxes[5*i+2].position(650,180+i*100);
    inputBoxes[5*i+3].position(900,180+i*100);
    inputBoxes[5*i+4].position(1150,180+i*100);
  }

  savebtn.show();
  printbtn.show();
  savebtn.position(200,120+count*100);
  printbtn.position(200,160+count*100);
}

function buttonClicked(clickedbtn) {
  let maw = 0.1;
  let rs,p1,p2,p3;
  let display_count=0;
  let reset;

  rs = inputBoxes[5*clickedbtn-5].value();
  p1 = inputBoxes[5*clickedbtn-4].value();
  p2 = inputBoxes[5*clickedbtn-3].value();
  p3 = inputBoxes[5*clickedbtn-2].value();

  console.log(rs,p1,p2,p3);

  for(let i = (rs/p1).toFixed();i>=0;i--) {
    let d1 = rs-i*p1;
     let d11 = d1.toFixed(2);
     for(let j = ((d11)/p2).toFixed( );j>=0;j--) {
       let d2 = d1-j*p2;
       let d22 = d2.toFixed(2);
       if(((d22)%p3).toFixed(2)<=maw&& ((d22)%p3).toFixed(2)>=0) {
         display_count++;
         fill(0);
         let p = createP(i+" ("+(p1*i).toFixed(2)+")");
         p.position(400,195+(clickedbtn-1)*100+(display_count-1)*20);
         let q = createP(j+" ("+(p2*j).toFixed(2)+")");
         q.position(650,195+(clickedbtn-1)*100+(display_count-1)*20);
         let r = createP(floor(d22/p3)+" ("+(p3*(floor(d22/p3))).toFixed(2)+")");
         r.position(900,195+(clickedbtn-1)*100+(display_count-1)*20);
         let wastage = (rs-i*p1-j*p2-(floor(d22/p3)*p3));
         let tp = rs-wastage;
         let s = createP(wastage.toFixed(2));
         s.position(1250,195+(clickedbtn-1)*100+(display_count-1)*20);
         let t = createP(tp.toFixed(2));
         t.position(1400,195+(clickedbtn-1)*100+(display_count-1)*20);
         if(display_count==3) {
           i=0;  
           j=0;
         }
       }
     } 
   }
}