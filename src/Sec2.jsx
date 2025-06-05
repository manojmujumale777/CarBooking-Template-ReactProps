import React from "react";

export default function Sec2(props)
{
    let items=props.data2;
    return(
        <>
        {
            items.map((x)=>
            {
                return(
                    <>
                    <div className="container mt-5 p-md-3">
                        <div className="text-center p-md-5">
                            <h5>{x.head1}</h5>
                            <h1>{x.head2}</h1>
                        </div>
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-4 p-md-3">
                                <figure>
                                    <img className="w-100" src={x.img1} alt="" />
                                    <figcaption className="p-3">
                                        <h3>{x.f_head}</h3>

                                        <div className="row justify-content-between p-2">
                                            <div className="col-6">
                                                <span>{x.s_head}</span>
                                            </div>
                                            <div className="col-6">
                                            <span>{x.l_head}</span>
                                            </div>
                                        </div>

                                        <div className="row p-lg-2">
                                            <div className="col-6">
                                                <button className="w-100 p-md-2 b1">{x.b1}</button>
                                            </div>
                                            <div className="col-6">
                                                <button className="w-100 p-md-2 b2">{x.b2}</button>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 p-2">
                            <figure>
                                 <img className="w-100" src={x.img2} alt="" />

                                    <figcaption  className="p-3">
                                        <h3>{x.f_head}</h3>

                                        <div className="row justify-content-between p-md-2">
                                            <div className="col-4">
                                                <span>{x.s_head}</span>
                                            </div>
                                            <div className="col-4">
                                            <span>{x.l_head}</span>
                                            </div>
                                        </div>

                                        <div className="row p-2">
                                            <div className="col-6">
                                                <button className="w-100 p-md-2 b1">{x.b1}</button>
                                            </div>
                                            <div className="col-6">
                                                <button className="w-100 p-md-2 b2">{x.b2}</button>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            
                            <div className="col-12 col-md-4 col-lg-4 p-3 d-md-none d-lg-block">
                            <figure>
                                   <img className="w-100" src={x.img3} alt="" />

                                    <figcaption  className="p-md-3">
                                        <h3>{x.f_head}</h3>

                                        <div className="row justify-content-between p-md-2">
                                            <div className="col-4">
                                                <span>{x.s_head}</span>
                                            </div>
                                            <div className="col-4">
                                            <span>{x.l_head}</span>
                                            </div>
                                        </div>

                                        <div className="row p-md-2">
                                            <div className="col-6">
                                                <button className="w-100 p-md-2 b1">{x.b1}</button>
                                            </div>
                                            <div className="col-6">
                                                <button className="w-100 p-md-2 b2">{x.b2}</button>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
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