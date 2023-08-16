import { Link } from "react-router-dom"
import Tag from "./Tag"

export default function ComponentPost(props) {
    var Item = props.data
    console.log('arr', Item)
    if (Item[0].data && Item[0].data.rss && Item[1].data && Item[1].data.rss) {
        return (
            <div className="bg0 p-t-70 p-b-55">
                <div className="container">
                    <div className="row justify-content-center">
                        {MainComponentPost(Item, props.active)}
                        {SubComponentPost(Item, props.tag, props.active)}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                Loadding...
            </div>
        )
    }
}

function MainComponentPost(Item, active) {
    var itemNews = Item[0]
    var data = itemNews.data.rss.channel[0].item
    var author = itemNews.data.rss.channel[0].generator
    return (
        <div className="col-md-10 col-lg-8 p-b-80">
            <div className="tab-content">
                {page(data, author, active, encodeURIComponent(itemNews.topic))}
            </div>
            {/* Pagination */}
            <ul className="nav nav-tabs" role="tablist">
                <div className="flex-wr-s-c m-rl--7 p-t-15">
                    {Pagination(data, author, data.length)}
                </div>
            </ul>

        </div>
    )
}

function page(data, author, active, topic) {
    var pages = new Array()
    var j = 0;
    if ((data.length - 4) % 12 != 0) {
        j = 1;
    }
    for (var i = 1; i <= ((data.length - 4) / 12) + j; i++) {
        if (i == 1) {
            pages.push(
                <div className="tab-pane fade show active" id={"page" + i} role="tabpanel">
                    <div className="row">
                        {showPost(data, author, i, active, topic)}
                    </div>
                </div>
            )
        } else {
            pages.push(
                <div className="tab-pane fade" id={"page" + i} role="tabpanel">
                    <div className="row">
                        {showPost(data, author, i, active, topic)}
                    </div>
                </div>
            )
        }
    }
    return pages
}

function Pagination(data, author, length) {
    var btn = new Array();
    var j = 0;
    if ((data.length - 4) % 12 != 0) {
        j = 1;
    }
    var list = ((length - 4) / 12) + j
    for (var i = 1; i <= list; i++) {
        if (i == 1) {
            btn.push(
                <li className="nav-item">
                    <a className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7 nav-link active" data-toggle="tab" href={"#page" + i} role="tab">{i}</a>
                </li>
            )
        } else {
            btn.push(
                <li className="nav-item">
                    <a className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7 nav-link" data-toggle="tab" href={"#page" + i} role="tab">{i}</a>
                </li>
            )
        }
    }
    return btn;
}

function SubComponentPost(Item, tag, active, topic) {
    var itemHot = Item[1]
    var data = itemHot.data.rss.channel[0].item
    return (
        <div className="col-md-10 col-lg-4 p-b-80">
            <div className="p-l-10 p-rl-0-sr991">
                {/* Subscribe */}
                <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-50">
                    <h5 className="f1-m-5 cl0 p-b-10">
                        Theo dõi
                    </h5>
                    <p className="f1-s-1 cl0 p-b-25">
                        Đăng ký thành viên ngay để có thể theo dõi những tin tức nóng hổi mỗi ngày.
                    </p>
                    <form className="size-a-9 pos-relative">
                        <input className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" type="text" name="email" placeholder="Email" />
                        <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                            <i className="fa fa-arrow-right" />
                        </button>
                    </form>
                </div>
                {/* Most Popular */}
                <div className="p-b-23">
                    <div className="how2 how2-cl4 flex-s-c">
                        <h3 className="f1-m-2 cl3 tab01-title">
                            Nổi Bật
                        </h3>
                    </div>
                    <ul className="p-t-35">
                        {showHotNews(data, active, encodeURIComponent(itemHot.topic))}
                    </ul>
                </div>
                {/*  */}
                <div className="flex-c-s p-b-50">
                    <a href="#">
                        <img className="max-w-full" src="images/banner-02.jpg" alt="IMG" />
                    </a>
                </div>
                {/* Tag */}
                <Tag tag={tag} />
            </div>
        </div>
    )
}

function showPost(data, author, page, active, topic) {
    var post = new Array();
    var pageLength = page * 12 + 4
    for (var i = 12 * (page - 1) + 4; i < pageLength && i < data.length; i++) {
        post.push(
            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                {/* Item latest */}
                <div className="m-b-45">
                    <Link to={'/detail?active='+ active +'&title='+ topic +'&url=' + data[i].link} className="wrap-pic-w hov1 trans-03">
                        <img src={data[i].description} alt="IMG" />
                    </Link>
                    <div className="p-t-16">
                        <h5 className="p-b-5">
                            {/* <Link to="/detail" className="f1-m-3 cl2 hov-cl10 trans-03">
                                You wish lorem ipsum dolor sit amet consectetur
                            </Link> */}
                            <Link to={'/detail?active='+ active +'&title='+ topic +'&url=' + data[i].link} className="f1-m-3 cl2 hov-cl10 trans-03">
                                {data[i].title}
                            </Link>
                        </h5>
                        <span className="cl8">
                            <Link to={'/detail?active='+ active +'&title='+ topic +'&url=' + data[i].link} className="f1-s-4 cl8 hov-cl10 trans-03">
                                by {author}
                            </Link>
                            <span className="f1-s-3 m-rl-3">
                                -
                            </span>
                            <span className="f1-s-3">
                                {data[i].pubDate}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    return post;
}

function showHotNews(data, active, topic) {
    var post = new Array();
    for (var i = 0; i < 5; i++) {
        post.push(
            <li className="flex-wr-sb-s p-b-22">
                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                    {i + 1}
                </div>
                <Link to={'/detail?active='+ active +'&title='+ topic +'&url=' + data[i].link} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                    {data[i].title}
                </Link>
            </li>
        )
    }
    return post;
}