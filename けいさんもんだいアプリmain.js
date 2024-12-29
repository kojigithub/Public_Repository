'use strict';

{

// ●四則演算の種類を選択
var Types = document.getElementsByName("Type");
var Levels = document.getElementsByName("Level");
var Type = "";
var Level = "";

// ●文字変更
const Fset = document.getElementById('Fset');
Fset.addEventListener('click',()=>{

  // ●typeとlevelの取得
  for(var i = 0; i < Types.length; i++){
    if(Types[i].checked){
        Type = Types[i].value;
      };
  };
  for(var i = 0; i < Levels.length; i++){
    if(Levels[i].checked){
      Level = Levels[i].value;
    };
  };
 
  if(Type !== "" && Level !== ""){
    Fset.textContent = 'りせっと';
    Fset.classList.add('HighLight');      

      // ●ここから=========================================
        var parent = document.getElementById('parent');
        var chi = document.getElementById('chil');        

        // ●解答欄の存在有無の確認
        if(document.getElementById('AnswerBox') != null){
          // ●解答欄が存在する場合
          let Boxes = document.getElementsByClassName('formulaBox');
          let MathSymbols = document.getElementsByClassName('MathSymbol');
          const equal = document.getElementById('equal');
          const AnswerBox = document.getElementById('AnswerBox');
          
          // ●存在していた要素を削除
          let removeNum = Boxes.length;
          for(let x = 0 ; x <=removeNum - 1 ; x++){
              Boxes[0].remove();
          }
          for(let x = 0 ; x <=removeNum - 2 ; x++){
              MathSymbols[0].remove();            
          }
          equal.remove();
          AnswerBox.remove();
         }

        // 数値の数
        const Suchinokazu =Number(Level)+1;
        for(let i = 1 ; i <= Suchinokazu ; i++){
          var min = 1 ;
          var max = 9 ;                 
            // ●計算式の生成
              // ●ランダムな数値を生成
              var randomNum = Math.floor( Math.random() * (max + 1 - min) ) + min ;
              // ●ランダムな数値をli要素で作成
              var new_box = document.createElement('li');      
              new_box.className = 'formulaBox';
              new_box.textContent = randomNum;
              // ●Typeをp要素で設定
              var new_Symbol = document.createElement('p');
              new_Symbol.className = "MathSymbol";
              new_Symbol.textContent = Type;
              // ●=記号を設定
              var new_Symbol2 = document.createElement('p');
              new_Symbol2.textContent = "=";
              new_Symbol2.id = "equal";

              // ●解答欄を設定
              var new_AnswerBox = document.createElement('li');
              new_AnswerBox.id = "AnswerBox";
            
          // ●各要素の生成 =================
              // ●数値の挿入
            parent.insertBefore(new_box,chi);
            if (i !== Suchinokazu){
              // ●記号の挿入
              parent.insertBefore(new_Symbol,chi);
            }else{
              // ●イコールの挿入
              parent.insertBefore(new_Symbol2,chi)
              // ●解答欄の挿入
              parent.insertBefore(new_AnswerBox,chi)
            }
            
          };
      // ●ここまで=========================================


  }  
});


          // ●解答の入力
        var ClickNum = function(btn){
          var ans = AnswerBox.textContent;
          if(AnswerBox.textContent !== '0'){
            if(AnswerBox.textContent.length < 4){
              AnswerBox.textContent = ans + btn.value;
            }else{
              alert('4もじ いじょうは  "にゅうりょく" できません');
            }
          }else{
            alert('0をけしてから "にゅうりょく" してください');
          }
        };



// ●提出
const Answer = document.getElementById('Answer');


// ●±変更
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const Numdelete = document.getElementById('delete');

minus.addEventListener('click',()=>{
  var AnswerNum = AnswerBox.textContent;
  if(AnswerNum > 0){
    AnswerBox.textContent = AnswerNum * -1;
  }
})

plus.addEventListener('click',()=>{
  var AnswerNum = AnswerBox.textContent;
  if(AnswerNum < 0){
    AnswerBox.textContent = AnswerNum * -1;
  }
})

// ●1文字削除
Numdelete.addEventListener('click',()=>{
  var AnswerNum = AnswerBox.textContent;
  if(AnswerNum !== ''){
    AnswerBox.textContent = AnswerNum.slice(0,-1);
    if(AnswerNum < 0 & AnswerNum > -10){
      AnswerBox.textContent = '';
    }
  }
})

Answer.addEventListener('click',()=>{
  // トグルクラス操作(CSSでハイライトのON/OFF)
  var AnswerNum = AnswerBox.textContent;
  if(AnswerNum === ''){
    alert('解答が入力されていません');
  }
  else{
    var AnswerNum = Number(AnswerBox.textContent);
    var formulaBox = document.getElementsByClassName('formulaBox');
    // ●数式を格納
    const arry = [];
    for(let y = 0 ; y <= formulaBox.length -1 ; y++){
      arry.push(Number(formulaBox[y].textContent));
    }
    let calc = arry.reduce(function(a, b) {
      switch (Type) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '×':
          return a * b;
        case '÷':
          return a / b;
        default:
          return a;
      }
    });

    if(calc === AnswerNum){
      alert('正解です');
    }else{
      alert('不正解です');
    }
  }
});


// ●削除
var reset = function(btn) {
  if (String(AnswerBox.value).length <=4 ){
    AnswerBox.textContent = AnswerBox.textContent + btn.value;
  }else{
    AnswerBox.value = String(AnswerBox.value).slice(1) + btn.value;
  }
  AnswerBox.textContent = '';
}

// ボタンのホバーエフェクト
const buttons = document.querySelectorAll('button, label');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});

}
