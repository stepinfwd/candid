import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import InputComp from "./input.js";
import Navbar from "./navbar";

function App() {
  const [search, setSearch] = useState("travel");
  const [value, setValue] = useState([]);

  const [loaded, setIsLoaded] = React.useState(false);
  const [imageData, setImageData] = useState([]);
  const [sent, setSent] = useState(false);

  useEffect(
    (item) => {
      // e.preventDefault();
      const access_key = "LD3Wl2QrQPHFCUnAGXU6AWQdLSipmIgi8TZKjzOOxAI";
      const url = "https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY";
      axios
        .get(
          `https://api.unsplash.com/search/photos/?client_id=LD3Wl2QrQPHFCUnAGXU6AWQdLSipmIgi8TZKjzOOxAI&query=${search}`
        )

        .then((res) => {
          console.log(res.data);
          console.log("call");
          setValue(res.data.results);
        });
    },
    [sent]
  );
  console.log("stae", search);
  // const Modal = () => {
  //   return (
  //     <div>
  //       <div className="modal" tabindex="-1" role="dialog">
  //         <div className="modal-dialog" role="document">
  //           <div className="modal-content">
  //             <div className="modal-header">
  //               <h5 className="modal-title">Modal title</h5>
  //               <button
  //                 type="button"
  //                 className="close"
  //                 data-dismiss="modal"
  //                 aria-label="Close"
  //               >
  //                 <span aria-hidden="true">&times;</span>
  //               </button>
  //             </div>
  //             <div className="modal-body">
  //               <p>Modal body text goes here</p>
  //             </div>
  //             <div className="modal-footer">
  //               <button type="button" className="btn btn-primary">
  //                 Save changes
  //               </button>
  //               <button
  //                 type="button"
  //                 className="btn btn-secondary"
  //                 data-dismiss="modal"
  //               >
  //                 Close
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="App">
      <Navbar
        setSearch={setSearch}
        search={search}
        sent={sent}
        setSent={setSent}
      />
      {/* <InputComp /> */}
      <h3 className="app-header">{search} photos</h3>
      <div className="image-grid" style={{ marginTop: "30px" }}>
        {value &&
          value.map((searchItem) => (
            <>
              <img
                className="search-image"
                src={searchItem.urls.regular}
                alt=""
                key={searchItem.id}
                // onClick={Modal}
              ></img>
            </>
          ))}
      </div>
    </div>
  );
}

export default App;
