import React from 'react'
import './Styled.css'
import Image from 'next/image';
import Ali from '@/public/images/Team/Ali-khosravani.jpg';
import SocialMediaTeam from '../social_media/SocialMediaTeam';

const Team = () => {
    return (
        <>
            <section className="team-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                                <div className="card-body p-4">
                                    <div className="member-profile position-absolute w-100 text-center">
                                        <Image className="rounded-circle mx-auto d-inline-block shadow-sm" src={Ali} alt="" />
                                    </div>
                                    <div className="card-text pt-1">
                                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">علی خسروانی</h5>
                                        <div className="mb-3 text-center">مدیرعامل</div>
                                        <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. Curabitur pellentesque convallis purus non ornare. Donec bibendum sed purus dignissim rutrum. Maecenas bibendum feugiat est, et venenatis nunc.</div>
                                    </div>
                                </div>
                                <div className="card-footer theme-bg-primary border-0 text-center">
                                    <SocialMediaTeam />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                                <div className="card-body p-4">
                                    <div className="member-profile position-absolute w-100 text-center">
                                        <Image className="rounded-circle mx-auto d-inline-block shadow-sm" src={Ali} alt="" />   </div>
                                    <div className="card-text pt-1">
                                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">علی خسروانی</h5>
                                        <div className="mb-3 text-center">مدیر سایت</div>
                                        <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. Curabitur pellentesque convallis purus non ornare. Donec bibendum sed purus dignissim rutrum. Maecenas bibendum feugiat est, et venenatis nunc.</div>
                                    </div>
                                </div>
                                <div className="card-footer theme-bg-primary border-0 text-center">
                                    <SocialMediaTeam />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                                <div className="card-body p-4">
                                    <div className="member-profile position-absolute w-100 text-center">
                                        <Image className="rounded-circle mx-auto d-inline-block shadow-sm" src={Ali} alt="" />    </div>
                                    <div className="card-text pt-1">
                                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">علی خسروانی</h5>
                                        <div className="mb-3 text-center">مدیر فروش</div>
                                        <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. </div>
                                    </div>
                                </div>
                                <div className="card-footer theme-bg-primary border-0 text-center">
                                    <SocialMediaTeam />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                                <div className="card-body p-4">
                                    <div className="member-profile position-absolute w-100 text-center">
                                        <Image className="rounded-circle mx-auto d-inline-block shadow-sm" src={Ali} alt="" />    </div>
                                    <div className="card-text pt-1">
                                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">علی خسروانی</h5>
                                        <div className="mb-3 text-center">مدیر پروژه</div>
                                        <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus.</div>
                                    </div>
                                </div>
                                <div className="card-footer theme-bg-primary border-0 text-center">
                                    <ul className="social-list list-inline mb-0 mx-auto">
                                        <SocialMediaTeam />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                                <div className="card-body p-4">
                                    <div className="member-profile position-absolute w-100 text-center">
                                        <Image className="rounded-circle mx-auto d-inline-block shadow-sm" src={Ali} alt="" />     </div>
                                    <div className="card-text pt-1">
                                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">علی خسروانی</h5>
                                        <div className="mb-3 text-center">طراح و گرافیست</div>
                                        <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus.</div>
                                    </div>
                                </div>
                                <div className="card-footer theme-bg-primary border-0 text-center">
                                    <SocialMediaTeam />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team