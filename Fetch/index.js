let cont1 = document.getElementById("cont1");
    let cont2 = document.getElementById("cont2");
    let btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
      getData();
    });
    async function getData() {
      let url = "https://reqres.in/api/users";
      let res = await fetch(url);
      let data = await res.json();

      showData(data);
    }

    function showData(data) {
        cont2.innerHTML = "";
      data.data.map((ele, index) => {
        let div = document.createElement("div");
        let name = document.createElement("h2");
        name.innerHTML = ele.first_name + " " + ele.last_name;
        let email = document.createElement("p");
        email.innerHTML = ele.email;
        let img = document.createElement("img");
        img.src = ele.avatar;
        div.append(img,name, email );
        cont2.append(div);
      });
    }