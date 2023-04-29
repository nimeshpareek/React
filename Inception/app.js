 // const heading = document.createElement("h1");
      // heading.innerHTML = "Hello guys";
      // const root = document.querySelector(".root");
      // root.appendChild(heading);

      //   <!-- now let's do the same thing in react -->

      // <div class="container"> <!--we can make this using react also-->
      //   <h1 id="title">heading1</h1>
      //   <h1 id="title">heading2</h1>
      // </div>

      const heading1 = React.createElement(
        "h1",
        {
          id: "title",
        },
        "heading1"
      );
      const heading = React.createElement(
      "h1",
      {
        id: "title",
      },
        "Namaste !");
    

      const heading2 = React.createElement(
        "h1",
        {
          id: "title",
        },
        "heading2"
      );

      const container = React.createElement(
        "div",
        {
          id: "container",
        },
        [heading, heading1, heading2
        ]
      );
      // const container_root = ReactDOM.createRoot(document)

      // const heading = React.createElement(
      //   "h1",
      //   {
      //     id: "title",
      //   },
      //     "Namaste !");
      // console.log(heading);
      console.log(container);
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(container); // this passes heading element into root