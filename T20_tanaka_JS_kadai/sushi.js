// alert("000");

document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("training-section").style.display = "block";
});

document.getElementById("start-button").addEventListener("click", function(){
  document.getElementById("topimgid").style.display = "none";
});

$(".button1").on("click", function () {
    var random = Math.floor(Math.random() * 3);
    console.log(random, "syari_random")
    
    if (random === 0) {
        console.log("完璧なシャリ");
        $(".syari").html("完璧なシャリ");
        $(".syari_img").attr("src", "./sushi.img/syari_0.png");
    } else if (random === 1) {
        console.log("崩れたシャリ");
        $(".syari").html("崩れたシャリ");
        $(".syari_img").attr("src", "./sushi.img/syari_1.jpeg");
    } else if (random === 2) {
        console.log("失敗");
        $(".syari").html("失敗");
        $(".syari_img").attr("src", "./sushi.img/syari_2.jpeg");
    }
  });

  $(".button2").on("click", function () {
    var random = Math.floor(Math.random() * 3);
    console.log(random, "wasabi_random")

    if (random === 0) {
        console.log("いい感じのわさび");
        $(".wasabi").html("いい感じのわさび");
        $(".wasabi_img").attr("src", "./sushi.img/wasabi_0.jpeg");
    } else if (random === 1) {
        console.log("多すぎるわさび");
        $(".wasabi").html("多すぎるわさび");
        $(".wasabi_img").attr("src", "./sushi.img/wasabi_1.jpeg");
    } else if (random === 2) {
        console.log("わさびですらない");
        $(".wasabi").html("わさびですらない");
        $(".wasabi_img").attr("src", "./sushi.img/wasabi_2.png");
    }
  });

  $(".button3").on("click", function () {
    var random = Math.floor(Math.random() * 10);
    console.log(random, "neta_random")

    if (random === 0) {
        console.log("サーモン");
        $(".neta").html("サーモン");
        $(".neta_img").attr("src", "./sushi.img/neta_0.jpeg");
    } else if (random === 1) {
        console.log("たまご");
        $(".neta").html("たまご");
        $(".neta_img").attr("src", "./sushi.img/neta_1.png");
    } else if (random === 2) {
        console.log("イカ");
        $(".neta").html("イカ");
        $(".neta_img").attr("src", "./sushi.img/neta_2.png");
    }else if (random === 3) {
        console.log("サバ");
        $(".neta").html("サバ");
        $(".neta_img").attr("src", "./sushi.img/neta_3.png");
    }else if (random === 4) {
        console.log("タイ");
        $(".neta").html("タイ");
        $(".neta_img").attr("src", "./sushi.img/neta_4.png");
    }else if (random === 5) {
        console.log("赤身");
        $(".neta").html("赤身");
        $(".neta_img").attr("src", "./sushi.img/neta_5.jpeg");
    }else if (random === 6) {
        console.log("えび");
        $(".neta").html("えび");
        $(".neta_img").attr("src", "./sushi.img/neta_6.png");
    }else if (random === 7) {
        console.log("ブリ");
        $(".neta").html("ブリ");
        $(".neta_img").attr("src", "./sushi.img/neta_7.jpeg");
    }else if (random === 8) {
        console.log("えんがわ");
        $(".neta").html("えんがわ");
        $(".neta_img").attr("src", "./sushi.img/neta_8.png");
    }else if (random === 9) {
        console.log("アナゴ");
        $(".neta").html("アナゴ");
        $(".neta_img").attr("src", "./sushi.img/neta_9.png");
    }else if (random === 10) {
        console.log("アジ");
        $(".neta").html("アジ");
        $(".neta_img").attr("src", "./sushi.img/neta_10.png");
    }
  });

  $(".button1, .button2, .button3").on("click", function () {
    // シャリ、わさび、ネタの状態を取得
    var syariState = $(".syari").html();
    var wasabiState = $(".wasabi").html();
    var netaText = $(".neta").html();
    
    // 完璧なシャリといい感じのわさびが揃っているか確認
    if (syariState === "完璧なシャリ" && wasabiState === "いい感じのわさび") {
      // ネタに応じて出力エリアに表示するテキストと画像を設定
      switch (netaText) {
        case "サーモン":
            $(".output").html("サーモン握り");
            $(".output_img").attr("src", "./sushi.img/sushi_0.png");
            break;
          case "たまご":
            $(".output").html("たまご握り");
            $(".output_img").attr("src", "./sushi.img/sushi_1.jpeg");
            break;
          case "イカ":
            $(".output").html("イカ握り");
            $(".output_img").attr("src", "./sushi.img/sushi_2.jpeg");
            break;
          case "サバ":
            $(".output").html("サバ握り");
            $(".output_img").attr("src", "./sushi.img/sushi_3.jpeg");
            break;
          case "タイ":
            $(".output").html("タイ握り");
            $(".output_img").attr("src", "./sushi.img/sushi_4.png");
            break;
          case "赤身":
            $(".output").html("赤身握り");
            $(".output_img").attr("src", "./sushi.img/sushi_5.jpeg");
            break;
          case "えび":
            $(".output").html("えび握り");
            $(".output_img").attr("src", "./sushi.img/sushi_6.png");
            break;
          case "ブリ":
            $(".output").html("ブリ握り");
            $(".output_img").attr("src", "./sushi.img/sushi_7.png");
            break;
          case "えんがわ":
            $(".output").html("えんがわ握り");
            $(".output_img").attr("src", "./sushi.img/sushi_8.jpeg");
            break;
          case "アナゴ":
            $(".output").html("アナゴ握り");
            $(".output_img").attr("src", "./sushi.img/sushi_9.png");
            break;
        }
            // 寿司の名前と画像をsushi-resultsに追加
    var sushiHTML = `
    <div>
      <h3>${sushiName}</h3>
      <img src="${sushiImg}" alt="${sushiName}">
    </div>
  `;
  $(".sushi-results").append(sushiHTML);
      }
    });

    function pressButton(buttonClass) {
        // ボタンを無効にする
        document.querySelector(`.${buttonClass}`).disabled = true;
      

        if(buttonClass === 'button1') {
          document.querySelector('.syari').textContent = "変更後のシャリのテキスト";
          document.querySelector('.syari_img').src = "./path_to_new_syari_image.jpeg";
        }
      }
      
      function resetEverything() {
        // 全てのボタンを有効にする
        document.querySelector('.button1').disabled = false;
        document.querySelector('.button2').disabled = false;
        document.querySelector('.button3').disabled = false;
      
        // シャリ、わさび、ネタの画像とテキストを初期のものにリセット
        document.querySelector('.syari').textContent = "シャリ";
        document.querySelector('.syari_img').src = "./sushi.img/syari_top.png";
        document.querySelector('.wasabi').textContent = "わさび";
        document.querySelector('.wasabi_img').src = "./sushi.img/wasabi_top.jpeg";
        document.querySelector('.neta').textContent = "ネタ";
        document.querySelector('.neta_img').src = "./sushi.img/neta_top.jpeg";
      
        // 生成された寿司の画像を初期のものにリセット
        document.querySelector('.output_img').src = "./sushi.img/sushi_generate_top.jpeg";
        // 修行の成果のテキストをリセット
        document.querySelector('.output').textContent = "修行の成果";  
    }

    

  
      