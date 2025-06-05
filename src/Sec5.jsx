import React from "react";

export default function Sec5(props)
{
    let items=props.data5;
    return(
        <>
        {
            items.map((x)=>
            {
                return(
                    <>
                    <div className="container-fluid bg5 text-white   mt-md-5 p-5">
                        <div className="row">
                            <div className="col-6"></div>
                            <div className="col-12 col-md-8 col-lg-4">
                                <h1>{x.head1}</h1>
                                <button className=" p-md-2 w-50 b1 m-auto d-block">{x.b1}</button>
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