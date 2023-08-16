import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import { Link } from "react-router-dom";
import TabHeader from './content/TabHeader';
import Item from './content/Item';


export default function Header(props) {

    var moi_nhat = new Item()
    var thoi_su = new Item()
    var the_gioi = new Item()
    var phap_luat = new Item()
    var giao_duc = new Item()
    var topicTinMoi = new Array()

    //Moi nhat
    moi_nhat.data = props.dataApp.moi_nhat
    moi_nhat.topic = "Tin mới"
    moi_nhat.id = 0
    moi_nhat.indexOfData = 0
    moi_nhat.link = "tin_moi"

    //Thoi su
    thoi_su.data = props.dataApp.thoi_su
    thoi_su.topic = "Thời sự"
    thoi_su.id = 1
    thoi_su.indexOfData = 0
    thoi_su.link = "thoi_su"

    //The gioi
    the_gioi.data = props.dataApp.the_gioi
    the_gioi.topic = "Thế giới"
    the_gioi.id = 2
    the_gioi.indexOfData = 0
    the_gioi.link = "the_gioi"

    //Phap luat
    phap_luat.data = props.dataApp.phap_luat
    phap_luat.topic = "Pháp luật"
    phap_luat.id = 3
    phap_luat.indexOfData = 0
    phap_luat.link = "phap_luat"

    //Giao duc
    giao_duc.data = props.dataApp.giao_duc
    giao_duc.topic = "Giáo dục"
    giao_duc.id = 4
    giao_duc.indexOfData = 0;
    giao_duc.link = "giao_duc"

    topicTinMoi.push(moi_nhat)
    topicTinMoi.push(thoi_su)
    topicTinMoi.push(the_gioi)
    topicTinMoi.push(phap_luat)
    topicTinMoi.push(giao_duc)



    var giai_tri = new Item()
    var the_thao = new Item()
    var du_lich = new Item()
    var khoa_hoc = new Item()
    var cuoi = new Item()
    var topicGiaiTri = new Array()


    //Giải trí
    giai_tri.data = props.dataApp.giai_tri
    giai_tri.topic = "Giải trí"
    giai_tri.id = 6
    giai_tri.indexOfData = 0
    giai_tri.link = "giai_tri"

    //The thao
    the_thao.data = props.dataApp.the_thao
    the_thao.topic = "Thể thao"
    the_thao.id = 7
    the_thao.indexOfData = 0
    the_thao.link = "the_thao"

    //The thao
    du_lich.data = props.dataApp.du_lich
    du_lich.topic = "Du lịch"
    du_lich.id = 8
    du_lich.indexOfData = 0
    du_lich.link = "du_lich"

    //Khoa hoc
    khoa_hoc.data = props.dataApp.khoa_hoc
    khoa_hoc.topic = "Khoa học"
    khoa_hoc.id = 9
    khoa_hoc.indexOfData = 0
    khoa_hoc.link = "khoa_hoc"

    //Cuoi
    cuoi.data = props.dataApp.cuoi
    cuoi.topic = "Cười"
    cuoi.id = 10
    cuoi.indexOfData = 0
    cuoi.link = "cuoi"

    topicGiaiTri.push(giai_tri)
    topicGiaiTri.push(the_thao)
    topicGiaiTri.push(du_lich)
    topicGiaiTri.push(khoa_hoc)
    topicGiaiTri.push(cuoi)



    var kinh_doanh = new Item()
    var so_hoa = new Item()
    var xe = new Item()
    var topicKinhDoanh = new Array()

    //Kinh doanh
    kinh_doanh.data = props.dataApp.kinh_doanh
    kinh_doanh.topic = "Kinh doanh"
    kinh_doanh.id = 11
    kinh_doanh.indexOfData = 0
    kinh_doanh.link = "kinh_doanh"

    //So hoa
    so_hoa.data = props.dataApp.so_hoa
    so_hoa.topic = "Số hóa"
    so_hoa.id = 12
    so_hoa.indexOfData = 0
    so_hoa.link = "so_hoa"

    //Xe
    xe.data = props.dataApp.xe
    xe.topic = "Xe"
    xe.id = 13
    xe.indexOfData = 0
    xe.link = "xe"

    topicKinhDoanh.push(kinh_doanh)
    topicKinhDoanh.push(so_hoa)
    topicKinhDoanh.push(xe)

    var doi_song = new Item()
    var suc_khoe = new Item()
    var tam_su = new Item()
    var topicDoiSong = new Array()

    //Doi song
    doi_song.data = props.dataApp.doi_song
    doi_song.topic = "Đời sống"
    doi_song.id = 14
    doi_song.indexOfData = 0
    doi_song.link = "doi_song"

    //Suc khoe
    suc_khoe.data = props.dataApp.suc_khoe
    suc_khoe.topic = "Sức khỏe"
    suc_khoe.id = 15
    suc_khoe.indexOfData = 0
    suc_khoe.link = "suc_khoe"

    //Tam su
    tam_su.data = props.dataApp.tam_su
    tam_su.topic = "Tâm sự"
    tam_su.id = 16
    tam_su.indexOfData = 0
    tam_su.link = "tam_su"

    topicDoiSong.push(doi_song)
    topicDoiSong.push(suc_khoe)
    topicDoiSong.push(tam_su)


    var noi_bat = new Item()
    var xem_nhieu = new Item()
    var topicNoiBat = new Array()

    //Noi bat
    noi_bat.data = props.dataApp.noi_bat
    noi_bat.topic = "Nổi bật"
    noi_bat.id = 17
    noi_bat.indexOfData = 0
    noi_bat.link = "noi_bat"

    //Xem nhieu
    xem_nhieu.data = props.dataApp.xem_nhieu
    xem_nhieu.topic = "Xem nhiều"
    xem_nhieu.id = 18
    xem_nhieu.indexOfData = 0
    xem_nhieu.link = "xem_nhieu"

    topicNoiBat.push(xem_nhieu)
    topicNoiBat.push(noi_bat)


    return (
        <div>
            {/* Header */}
            <header>
                {/* Header desktop */}
                <div className="container-menu-desktop">
                    <div className="topbar">
                        <div className="content-topbar container h-100">
                            <div className="left-topbar">
                                <span className="left-topbar-item flex-wr-s-c">
                                    <span>
                                        Hồ Chí Minh, VN
                                    </span>
                                    <img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG" />
                                    <span>
                                        HI 34° LO 26°
                                    </span>
                                </span>
                                <a href="/about" className="left-topbar-item">
                                    Liên hệ
                                </a>
                            </div>
                            <div className="right-topbar">
                                <a href="#">
                                    <span className="fab fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <span className="fab fa-twitter" />
                                </a>
                                <a href="#">
                                    <span className="fab fa-pinterest-p" />
                                </a>
                                <a href="#">
                                    <span className="fab fa-vimeo-v" />
                                </a>
                                <a href="#">
                                    <span className="fab fa-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Header Mobile */}
                    <div className="wrap-header-mobile">
                        {/* Logo moblie */}
                        <div className="logo-mobile">
                            <a href=""><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
                        </div>
                        {/* Button show menu */}
                        <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
                            <span className="hamburger-box">
                                <span className="hamburger-inner" />
                            </span>
                        </div>
                    </div>
                    {/* Menu Mobile */}
                    <div className="menu-mobile">
                        <ul className="topbar-mobile">
                            <li className="left-topbar">
                                <span className="left-topbar-item flex-wr-s-c">
                                    <span>
                                        Việt Nam, VN
                                    </span>
                                    <img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG" />
                                    <span>
                                        HI 34° LO 26°
                                    </span>
                                </span>
                            </li>
                            <li className="left-topbar">
                                <a href="#" className="left-topbar-item">
                                    Liên hệ
                                </a>
                            </li>
                            <li className="right-topbar">
                                <a href="#">
                                    <span className="fab fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <span className="fab fa-twitter" />
                                </a>
                                <a href="#">
                                    <span className="fab fa-pinterest-p" />
                                </a>
                                <a href="#">
                                    <span className="fab fa-vimeo-v" />
                                </a>
                                <a href="#">
                                    <span className="fab fa-youtube" />
                                </a>
                            </li>
                        </ul>
                        <ul className="main-menu-m">
                            <li>
                                <Link to="/">Trang Chủ</Link>
                                <span className="arrow-main-menu-m">
                                    <i className="fa fa-angle-right" aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <Link to="/news">News</Link>
                            </li>
                            <li>
                                <Link to="/entertainment">Entertainment </Link>
                            </li>
                            <li>
                                <a href="category-01.html">Business</a>
                            </li>
                            <li>
                                <a href="category-02.html">Travel</a>
                            </li>
                            <li>
                                <a href="category-01.html">Life Style</a>
                            </li>
                            <li>
                                <a href="category-02.html">Video</a>
                            </li>
                        </ul>
                    </div>
                    {/*  */}
                    <div className="wrap-logo container">
                        {/* Logo desktop */}
                        <div className="logo">
                            <a href="index.html"><img src="images/icons/logo-01.png" alt="LOGO" /></a>
                        </div>
                        {/* Banner */}
                        <div className="banner-header">
                            <a href="https://themewagon.com/themes/free-bootstrap-4-html5-news-website-template-magnews2/"><img src="images/banner-01.jpg" alt="IMG" /></a>
                        </div>
                    </div>
                    {/*  */}
                    <div className="wrap-main-nav">
                        <div className="main-nav">
                            {/* Menu desktop */}
                            <nav className="menu-desktop">
                                <a className="logo-stick" href="index.html">
                                    <img src="images/icons/logo-01.png" alt="LOGO" />
                                </a>
                                <ul className="main-menu">
                                    <li className={props.active == 0 ? "main-menu-active" : ""}>
                                        <Link to="/">Trang Chủ</Link>
                                        {/* <ul className="sub-menu">
                                                <li><a href="/">Homepage v1</a></li>
                                                <li><a href="home-02.html">Homepage v2</a></li>
                                                <li><a href="home-03.html">Homepage v3</a></li>
                                            </ul> */}
                                    </li>
                                    <TabHeader data={topicTinMoi} link={'/tin_moi'} active={props.active == 1 ? 1 : 0} act={1}/>

                                    <TabHeader data={topicGiaiTri} link={'giai_tri'}active={props.active == 2 ? 1 : 0} act={2}/>

                                    <TabHeader data={topicKinhDoanh} link={'kinh_doanh'} active={props.active == 3 ? 1 : 0} act={3}/>

                                    <TabHeader data={topicDoiSong} link={'doi_song'} active={props.active == 4 ? 1 : 0} act={4}/>

                                    <TabHeader data={topicNoiBat} link={'xem_nhieu'} active={props.active == 5 ? 1 : 0} act={5}/>

                                    <li className={props.active == 6 ? "main-menu-active" : ""}>
                                        <Link to="/about">Liên hệ</Link>
                                        {/* <ul className="sub-menu">
                                            <li><a href="category-01.html">Category Page v1</a></li>
                                            <li><a href="category-02.html">Category Page v2</a></li>
                                            <li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
                                            <li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
                                            <li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
                                            <li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
                                            <li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul> */}
                                    </li>


                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>


        </div>
    )

}

