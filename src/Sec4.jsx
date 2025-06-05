import React from "react";
export default function Sec4(props)
{
    let items=props.data4;
    return(
        <>
        {
            items.map((x)=>
            {
                return(
                    <>
                    <div className="container mt-5 p-md-5">
                        <div className="text-center">
                            <h6>{x.p1}</h6>
                            <h1>{x.head1}</h1>
                        </div>
                        <div className="row text-center pt-md-5 p-md-3">

                            <div className="col-12 col-md-3">
                                <span className="fa-solid fa-car rounded-circle bg-info icon"></span>
                                <p className="p-3">{x.p}</p>
                            </div>

                            <div className="col-12 col-md-3">
                                <span className="fa-solid fa-car rounded-circle bg-info icon"></span>
                                <p className="p-3">{x.p}</p>
                            </div>

                            <div className="col-12 col-md-3">
                                <span className="fa-solid fa-car rounded-circle bg-info icon"></span>
                                <p className="p-3">{x.p}</p>
                            </div>

                            <div className="col-12 col-md-3">
                                <span className="fa-solid fa-car rounded-circle bg-info icon"></span>
                                <p className="p-3">{x.p}</p>
                            </div>
                            
                        </div>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}