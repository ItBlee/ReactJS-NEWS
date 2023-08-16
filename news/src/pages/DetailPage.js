import React, { Component } from 'react';
import Header from "./Header"
import Tag from "./content/Tag"
import { Link } from 'react-router-dom';

class DetailPage extends Component {

    state = {
        item: null
    }

    callBackendAPI = async (url) => {
        const response = await fetch(url);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    componentDidMount() {
        var url = ''
        url += window.location.href
        var index = url.indexOf('&url=')
        var link = url.substring(index + 5)
        var vnexpress = 'https://vnexpress.net/'
        var indexPage = link.indexOf('https://vnexpress.net/')
        var page = '/detail/' + link.substring(indexPage + vnexpress.length)
        this.callBackendAPI(page)
            .then(res => {
                this.setState({ item: res })
            })
            .catch(err => console.log(err));
    }

    render() {
        var url = ''
        url += window.location.href
        var act = url.indexOf('?active=')
        var active = url.substring(act + 8, act + 9)
        var indexTitle = url.indexOf('&title=')
        var endTitle = url.indexOf('&url=')
        var title = decodeURIComponent(url.substring(indexTitle + 7, endTitle))

        if (this.state.item) {
            return (
                <div>
                    <Header dataApp={this.props.dataApp} active={active} />

                    {/* Breadcrumb */}
                    <div className="container">
                        <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                            <div className="f2-s-1 p-r-30 m-tb-6">
                                <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
                                    Trang chủ
                                </a>
                                <a href="blog-list-01.html" className="breadcrumb-item f1-s-3 cl9">
                                    Bài viết
                                </a>
                                <span className="breadcrumb-item f1-s-3 cl9">
                                    {this.state.item.title}
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


                    {/* <!-- Content --> */}
                    <section className="bg0 p-b-140 p-t-10">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-8 p-b-30">
                                    <div className="p-r-10 p-r-0-sr991">
                                        {/* Blog Detail */}
                                        <div className="p-b-70">
                                            <a href="#" className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase">
                                                {title}
                                            </a>
                                            <h3 className="f1-l-3 cl2 p-b-16 p-t-33 respon2">
                                                {this.state.item.title}
                                            </h3>
                                            <div className="flex-wr-s-s p-b-40">
                                                <span className="f1-s-3 cl8 m-r-15">
                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        bởi {this.state.item.detail[this.state.item.detail.length - 1]}
                                                    </a>
                                                    {/* <span className="m-rl-3">-</span>
                                                    <span>
                                                        Feb 18
                                                    </span> */}
                                                </span>
                                                {/* <span className="f1-s-3 cl8 m-r-15">
                                                    5239 Views
                                                </span>
                                                <a href="#" className="f1-s-3 cl8 hov-cl10 trans-03 m-r-15">
                                                    0 Comment
                                                </a> */}
                                            </div>
                                            {showDetail(this.state.item)}
                                            {/* Tag */}
                                            <div className="flex-s-s p-t-12 p-b-15">
                                                <span className="f1-s-12 cl5 m-r-8">
                                                    Tags:
                                                </span>
                                                {/* <div className="flex-wr-s-s size-w-0">
                                                    <a href="#" className="f1-s-12 cl8 hov-link1 m-r-15">
                                                        Streetstyle
                                                    </a>
                                                    <a href="#" className="f1-s-12 cl8 hov-link1 m-r-15">
                                                        Crafts
                                                    </a>
                                                </div> */}
                                            </div>
                                            {/* Share */}
                                            <div className="flex-s-s">
                                                <span className="f1-s-12 cl5 p-t-1 m-r-15">
                                                    Share:
                                                </span>
                                                <div className="flex-wr-s-s size-w-0">
                                                    <a href="#" className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                                                        <i className="fab fa-facebook-f m-r-7" />
                                                        Facebook
                                                    </a>
                                                    <a href="#" className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                                                        <i className="fab fa-twitter m-r-7" />
                                                        Twitter
                                                    </a>
                                                    <a href="#" className="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                                                        <i className="fab fa-google-plus-g m-r-7" />
                                                        Google+
                                                    </a>
                                                    <a href="#" className="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                                                        <i className="fab fa-pinterest-p m-r-7" />
                                                        Pinterest
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Leave a comment */}
                                        <div>
                                            <h4 className="f1-l-4 cl3 p-b-12">
                                                Hãy để lại bình luận
                                            </h4>
                                            <p className="f1-s-13 cl8 p-b-40">
                                                Email của bạn sẽ được bảo mật tuyệt đối. Trường * là bắt buộc
                                            </p>
                                            <form>
                                                <textarea className="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20" name="msg" placeholder="Nhập bình luận..." defaultValue={""} />
                                                <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="name" placeholder="Họ tên*" />
                                                <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="email" placeholder="Email*" />
                                                <button className="size-a-17 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-10">
                                                    Bình luận
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* Sidebar */}
                                <div className="col-md-10 col-lg-4 p-b-30">
                                    <div className="p-l-10 p-rl-0-sr991 p-t-70">
                                        {/* Category */}
                                        {/* <div className="p-b-60">
                                            <div className="how2 how2-cl4 flex-s-c">
                                                <h3 className="f1-m-2 cl3 tab01-title">
                                                    Category
                                                </h3>
                                            </div>
                                            <ul className="p-t-35">
                                                <li className="how-bor3 p-rl-4">
                                                    <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                        Fashion
                                                    </a>
                                                </li>
                                                <li className="how-bor3 p-rl-4">
                                                    <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                        Beauty
                                                    </a>
                                                </li>
                                                <li className="how-bor3 p-rl-4">
                                                    <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                        Street Style
                                                    </a>
                                                </li>
                                                <li className="how-bor3 p-rl-4">
                                                    <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                        Life Style
                                                    </a>
                                                </li>
                                                <li className="how-bor3 p-rl-4">
                                                    <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                                                        DIY &amp; Crafts
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}
                                        {/* Archive */}
                                        {/* <div className="p-b-37">
                                            <div className="how2 how2-cl4 flex-s-c">
                                                <h3 className="f1-m-2 cl3 tab01-title">
                                                    Archive
                                                </h3>
                                            </div>
                                            <ul className="p-t-32">
                                                <li className="p-rl-4 p-b-19">
                                                    <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                                                        <span>
                                                            July 2018
                                                        </span>
                                                        <span>
                                                            (9)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="p-rl-4 p-b-19">
                                                    <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                                                        <span>
                                                            June 2018
                                                        </span>
                                                        <span>
                                                            (39)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="p-rl-4 p-b-19">
                                                    <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                                                        <span>
                                                            May 2018
                                                        </span>
                                                        <span>
                                                            (29)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="p-rl-4 p-b-19">
                                                    <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                                                        <span>
                                                            April  2018
                                                        </span>
                                                        <span>
                                                            (35)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="p-rl-4 p-b-19">
                                                    <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                                                        <span>
                                                            March 2018
                                                        </span>
                                                        <span>
                                                            (22)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="p-rl-4 p-b-19">
                                                    <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                                                        <span>
                                                            February 2018
                                                        </span>
                                                        <span>
                                                            (32)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="p-rl-4 p-b-19">
                                                    <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                                                        <span>
                                                            January 2018
                                                        </span>
                                                        <span>
                                                            (21)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="p-rl-4 p-b-19">
                                                    <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
                                                        <span>
                                                            December 2017
                                                        </span>
                                                        <span>
                                                            (26)
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}
                                        {/* Popular Posts */}
                                        <div className="p-b-30">
                                            <div className="how2 how2-cl4 flex-s-c">
                                                <h3 className="f1-m-2 cl3 tab01-title">
                                                    Tin nổi bật
                                                </h3>
                                            </div>
                                            <ul className="p-t-35">
                                                {showHotNews(this.props.dataExtra)}
                                            </ul>
                                        </div>
                                        {/* Tag */}
                                        <Tag tag={this.props.tag} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}

function showDetail(item) {
    var post = new Array();
    var imageCount = 0;
    post.push(
        <h2 className="f1-s-11 cl6 p-b-25">{item.description}</h2>
    )
    for (var i = 0; i < item.detail.length - 1; i++) {
        if (item.imagePosition[i] == true) {
            post.push(
                <div className="wrap-pic-max-w p-b-30">
                    <img src={item.image[imageCount]} alt="IMG" />
                </div>
            )
            imageCount++;
            continue;
        }
        post.push(
            <p className="f1-s-11 cl6 p-b-25">{item.detail[i]}</p>
        )
    }
    return post;
}

function showHotNews(dataExtra) {
    if (dataExtra.data == null)
        return (<div></div>)
    var data = dataExtra.data.rss.channel[0].item


    var post = new Array();
    for (var i = 0; i < 5; i++) {
        var url = data[i].link.toString()
        post.push(
            <li className="flex-wr-sb-s p-b-30">
                <a href={'/detail?active=5&title='+ encodeURIComponent(dataExtra.topic) +'&url=' + url} className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src={data[i].description} alt="IMG" />
                </a>
                <div className="size-w-11">
                    <h6 className="p-b-4">
                        <a href={'/detail?active=5&title='+ encodeURIComponent(dataExtra.topic) +'&url=' + url} className="f1-s-5 cl3 hov-cl10 trans-03">
                            {data[i].title}
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
                            {data[i].pubDate}
                        </span>
                    </span>
                </div>
            </li>
        )
    }
    return post;
}

export default DetailPage;