import React from 'react'
import Header from './Header'

export default function About(props) {
    return (
        <div>
             <Header dataApp={props.dataApp} active={6}/>
            <React.Fragment>
                <div>
               
                    {/* Breadcrumb */}
                    <div className="container">
                        <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                            <div className="f2-s-1 p-r-30 m-tb-6">
                                <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
                                    Trang chủ
                                </a>
                                <span className="breadcrumb-item f1-s-3 cl9">
                                    Liên hệ
                                </span>
                            </div>
                            <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                                <input className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search" placeholder="Search" />
                                <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                                    <i className="zmdi zmdi-search" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Page heading */}
                    <div className="container p-t-4 p-b-35">
                        <h2 className="f1-l-1 cl2">
                            Về chúng tôi
                        </h2>
                    </div>
                    {/* Content */}
                    <section className="bg0 p-b-110">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-7 col-lg-8 p-b-30">
                                    <div className="p-r-10 p-r-0-sr991">
                                        <p className="f1-s-11 cl6 p-b-25">
                                        Ngày thành lập: 01/03/2022<br/>
                                        <br/>
                                        Cơ quan chủ quản: Bộ Khoa học Công nghệ<br/>
                                        Phó Tổng Biên tập phụ trách: Văn Linh<br/>
                                        Số giấy phép: 548/GP-BTTTT ngày 24/01/2022<br/>
                                        <br/>
                                        Tòa soạn<br/>
                                        Tầng 5, Tòa nhà FPT Cầu Giấy, phố Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội<br/>
                                        Đường dây nóng: 083.888.0123<br/>
                                        Điện thoại: 024 7300 8899 - máy lẻ 4500<br/>
                                        Fax: 024 3795 9948<br/>
                                        <br/>
                                        Văn phòng đại diện VnExpress tại Tp.HCM<br/>
                                        Tầng 6 – Tòa nhà Tower Exchange – số 1 Nam Kỳ Khởi Nghĩa, phường Nguyễn Thái Bình, Quận 1, Tp.HCM<br/>
                                        <br/>
                                        Đường dây nóng: 082.233.3555<br/>
                                        Điện thoại: 028 7300 8899 - máy lẻ 8505<br/>
                                        Fax: 028 7300 9998<br/>
                                        Liên hệ quảng cáo: 090 293 9644<br/>
                                        </p>
                                    </div>
                                </div>
                                {/* Sidebar */}
                                <div className="col-md-5 col-lg-4 p-b-30">
                                    <div className="p-l-10 p-rl-0-sr991 p-t-5">
                                        {/* Popular Posts */}
                                        <div>
                                            <div className="how2 how2-cl4 flex-s-c">
                                                <h3 className="f1-m-2 cl3 tab01-title">
                                                    Tin nổi bật
                                                </h3>
                                            </div>
                                            <ul className="p-t-35">
                                                <li className="flex-wr-sb-s p-b-30">
                                                    <a href="/detail?active=5&title=N%E1%BB%95i%20b%E1%BA%ADt&url=https://video.vnexpress.net/tin-tuc/thoi-su/cau-thu-thiem-2-truoc-ngay-thong-xe-4452192.html" className="size-w-10 wrap-pic-w hov1 trans-03">
                                                        <img src="https://i1-vnexpress.vnecdn.net/2022/04/17/277314749535830937912652614722-5075-2615-1650204244.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=rr1NvoyR1FHugMS3uklMug" alt="IMG" />
                                                    </a>
                                                    <div className="size-w-11">
                                                        <h6 className="p-b-4">
                                                            <a href="/detail?active=5&title=N%E1%BB%95i%20b%E1%BA%ADt&url=https://video.vnexpress.net/tin-tuc/thoi-su/cau-thu-thiem-2-truoc-ngay-thong-xe-4452192.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                Cầu Thủ Thiêm 2 trước ngày thông xe
                                                            </a>
                                                        </h6>
                                                        <span className="cl8 txt-center p-b-24">
                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                VNExpress
                                                            </a>
                                                            <span className="f1-s-3 m-rl-3">
                                                                -
                                                            </span>
                                                            <span className="f1-s-3">
                                                                Hôm nay
                                                            </span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="flex-wr-sb-s p-b-30">
                                                    <a href="/detail?active=5&title=N%E1%BB%95i%20b%E1%BA%ADt&url=https://vnexpress.net/ukraine-tuyen-bo-khong-nhuong-lanh-tho-de-dung-chien-su-4452547.html" className="size-w-10 wrap-pic-w hov1 trans-03">
                                                        <img src="https://i1-vnexpress.vnecdn.net/2022/04/18/anhcathypatiah18726988d64f601f-7968-1496-1650238753.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=iaKhlFvPnc4XjyfeQ5fWkQ" alt="IMG" />
                                                    </a>
                                                    <div className="size-w-11">
                                                        <h6 className="p-b-4">
                                                            <a href="/detail?active=5&title=N%E1%BB%95i%20b%E1%BA%ADt&url=https://vnexpress.net/ukraine-tuyen-bo-khong-nhuong-lanh-tho-de-dung-chien-su-4452547.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                Ukraine tuyên bố không nhượng lãnh thổ để dừng chiến sự
                                                            </a>
                                                        </h6>
                                                        <span className="cl8 txt-center p-b-24">
                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                VNExpress
                                                            </a>
                                                            <span className="f1-s-3 m-rl-3">
                                                                -
                                                            </span>
                                                            <span className="f1-s-3">
                                                                Hôm nay
                                                            </span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="flex-wr-sb-s p-b-30">
                                                    <a href="/detail?active=5&title=N%E1%BB%95i%20b%E1%BA%ADt&url=https://vnexpress.net/cu-chi-hoc-mon-vung-dat-nhieu-du-an-treo-4451669.html" className="size-w-10 wrap-pic-w hov1 trans-03">
                                                        <img src="https://i1-vnexpress.vnecdn.net/2022/04/18/cv3-3089-1434243764-4052-15611-4840-9389-1650218963.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=9z4xE3asGSq4n9hxWABapw" alt="IMG" />
                                                    </a>
                                                    <div className="size-w-11">
                                                        <h6 className="p-b-4">
                                                            <a href="/detail?active=5&title=N%E1%BB%95i%20b%E1%BA%ADt&url=https://vnexpress.net/cu-chi-hoc-mon-vung-dat-nhieu-du-an-treo-4451669.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                Củ Chi, Hóc Môn - vùng đất 'nhiều dự án treo'
                                                            </a>
                                                        </h6>
                                                        <span className="cl8 txt-center p-b-24">
                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                VNExpress
                                                            </a>
                                                            <span className="f1-s-3 m-rl-3">
                                                                -
                                                            </span>
                                                            <span className="f1-s-3">
                                                                Hôm nay
                                                            </span>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </React.Fragment>
        </div>
    )
}
