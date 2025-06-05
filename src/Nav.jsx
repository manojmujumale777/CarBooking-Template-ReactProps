import React from "react";

export default function Nav(props)
{
    let items=props.data;
    return(
       <>
       {
        items.map((x)=>
          {
            return(
                <>
                <div className="container-fluid  pt-lg-5 bg1 text-white">
                    <div className="row justify-content-between">
                    <div className="col-6 text-center">
                        <h3><i><span className="text-warning">{x.logo1}</span><span className="text-white">{x.logo2}</span></i></h3>
                    </div>
                    <div className="col-4 d-none d-lg-block">
                        <ul className="d-flex list-unstyled justify-content-between">
                            <a href=""><li>{x.li1}</li></a>
                            <a href=""><li>{x.li2}</li></a>
                            <a href=""><li>{x.li3}</li></a>
                            <a href=""><li>{x.li4}</li></a>
                            <a href=""><li>{x.li5}</li></a>
                            <a href=""><li>{x.li6}</li></a>
                        </ul>
                    </div>
                    <div className="col-2 text-center">
                        <button type="button" className="btn btn-outline-danger d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#open"><i className="fa-solid fa-bars d-lg-none"></i></button>
                    </div>

                    <div className="row  d-flex justify-content-center">
                        <div className="col-12 col-md-5 mt-md-5">
                        <h1>{x.head1}</h1>
                        <p>{x.p1}</p>
                        <h6>{x.p2}</h6>

                    </div>
                    </div>
                    </div>
                </div>

                <div className="offcanvas offcanvas-start bg-dark" id="open">
                    <div className="offcanvas-header">
                        <button className="btn btn-close btn-light" data-bs-dismiss="offcanvas"></button>
                    </div> <hr className="text-light" />
                    <div className="offcanvas-body text-white">
                    <ul className="list-unstyled">
                            <a href=""><li>{x.li1}</li></a>
                            <hr className="text-light" />
                            <a href=""><li>{x.li2}</li></a>
                            <hr className="text-light" />
                            <a href=""><li>{x.li3}</li></a>
                            <hr className="text-light" />
                            <a href=""><li>{x.li4}</li></a>
                            <hr className="text-light" />
                            <a href=""><li>{x.li5}</li></a>
                            <hr className="text-light" />
                            <a href=""><li>{x.li6}</li></a>
                        </ul>
                    </div>
                </div>
                </>
                
            )
          }
        )
       }
       </>
     
    )
}