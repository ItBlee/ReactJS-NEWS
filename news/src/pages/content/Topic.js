import { Link } from "react-router-dom"

export default function Topic(props) {
    var ItemGiaiTri = props.data[0]
    var ItemTheThao = props.data[1]
    var ItemDuLich = props.data[2]
    var ItemKhoaHoc = props.data[3]
    var ItemCuoi = props.data[4]
    var active = props.active
    //console.log("Topic", ItemGiaiTri)
    if (ItemGiaiTri.data && ItemGiaiTri.data.rss && ItemTheThao.data && ItemTheThao.data.rss && ItemDuLich.data &&
        ItemDuLich.data.rss && ItemCuoi.data && ItemCuoi.data.rss && ItemKhoaHoc.data && ItemKhoaHoc.data.rss) {
        var arrGiaiTri = ItemGiaiTri.data.rss.channel[0].item
        var arrTheThao = ItemTheThao.data.rss.channel[0].item
        var arrDuLich = ItemDuLich.data.rss.channel[0].item
        var arrKhoaHoc = ItemKhoaHoc.data.rss.channel[0].item
        var arrCuoi = ItemCuoi.data.rss.channel[0].item
        return (
            <div>
                {/* Entertainment */}
                <div className="tab01 p-b-20">
                    <div className={"tab01-head how2 how2-cl" + props.hcolor + " bocl12 flex-s-c m-r-10 m-r-0-sr991"}>
                        {/* Brand tab */}
                        <h3 className={"f1-m-2 cl" + props.color + " tab01-title"}>
                            {ItemGiaiTri.topic}
                        </h3>
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href={"#tab" + ItemGiaiTri.id + "-1"} role="tab">All</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href={"#tab" + ItemGiaiTri.id + "-2"} role="tab">{ItemTheThao.topic}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href={"#tab" + ItemGiaiTri.id + "-3"} role="tab">{ItemDuLich.topic}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href={"#tab" + ItemGiaiTri.id + "-4"} role="tab">{ItemKhoaHoc.topic}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href={"#tab" + ItemGiaiTri.id + "-5"} role="tab">{ItemCuoi.topic}</a>
                            </li>
                            <li className="nav-item-more dropdown dis-none">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="fa fa-ellipsis-h" />
                                </a>
                                <ul className="dropdown-menu">
                                </ul>
                            </li>
                        </ul>
                        {/*  */}
                        <Link to={props.link} className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                            Tất cả
                            <i className="fs-12 m-l-5 fa fa-caret-right" />
                        </Link>
                    </div>
                    {/* Tab panes */}
                    <div className="tab-content p-t-35">
                        {/* - */}
                        <div className="tab-pane fade show active" id={"tab" + ItemGiaiTri.id + "-1"} role="tabpanel">
                            <div className="row">
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemGiaiTri.topic) +'&url=' + arrGiaiTri[ItemGiaiTri.indexOfData].link} className="wrap-pic-w hov1 trans-03">
                                            <img src={arrGiaiTri[ItemGiaiTri.indexOfData].description} alt="IMG" />
                                        </Link>
                                        <div className="p-t-20">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemGiaiTri.topic) +'&url=' + arrGiaiTri[ItemGiaiTri.indexOfData].link} className="f1-m-3 cl2 hov-cl10 trans-03">
                                                    {arrGiaiTri[ItemGiaiTri.indexOfData].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                    {ItemGiaiTri.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrGiaiTri[ItemGiaiTri.indexOfData].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemGiaiTri.topic) +'&url=' + arrGiaiTri[ItemGiaiTri.indexOfData + 1].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrGiaiTri[ItemGiaiTri.indexOfData + 1].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemGiaiTri.topic) +'&url=' + arrGiaiTri[ItemGiaiTri.indexOfData + 1].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrGiaiTri[ItemGiaiTri.indexOfData + 1].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                    {ItemGiaiTri.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrGiaiTri[ItemGiaiTri.indexOfData + 1].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemGiaiTri.topic) +'&url=' + arrGiaiTri[ItemGiaiTri.indexOfData + 2].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrGiaiTri[ItemGiaiTri.indexOfData + 2].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemGiaiTri.topic) +'&url=' + arrGiaiTri[ItemGiaiTri.indexOfData + 2].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrGiaiTri[ItemGiaiTri.indexOfData + 2].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                    {ItemGiaiTri.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrGiaiTri[ItemGiaiTri.indexOfData + 2].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemGiaiTri.topic) +'&url=' + arrGiaiTri[ItemGiaiTri.indexOfData + 3].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrGiaiTri[ItemGiaiTri.indexOfData + 3].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemGiaiTri.topic) +'&url=' + arrGiaiTri[ItemGiaiTri.indexOfData + 3].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrGiaiTri[ItemGiaiTri.indexOfData + 3].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                    {ItemGiaiTri.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrGiaiTri[ItemGiaiTri.indexOfData + 3].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* - */}
                        <div className="tab-pane fade" id={"tab" + ItemGiaiTri.id + "-2"} role="tabpanel">
                            <div className="row">
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemTheThao.topic) +'&url=' + arrTheThao[ItemTheThao.indexOfData].link} className="wrap-pic-w hov1 trans-03">
                                            <img src={arrTheThao[ItemTheThao.indexOfData].description} alt="IMG" />
                                        </Link>
                                        <div className="p-t-20">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemTheThao.topic) +'&url=' + arrTheThao[ItemTheThao.indexOfData].link} className="f1-m-3 cl2 hov-cl10 trans-03">
                                                    {arrTheThao[ItemTheThao.indexOfData].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                    {ItemTheThao.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrTheThao[ItemTheThao.indexOfData].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemTheThao.topic) +'&url=' + arrTheThao[ItemTheThao.indexOfData + 1].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrTheThao[ItemTheThao.indexOfData + 1].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemTheThao.topic) +'&url=' + arrTheThao[ItemTheThao.indexOfData + 1].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrTheThao[ItemTheThao.indexOfData + 1].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                    {ItemTheThao.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrTheThao[ItemTheThao.indexOfData + 1].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemTheThao.topic) +'&url=' + arrTheThao[ItemTheThao.indexOfData + 2].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrTheThao[ItemTheThao.indexOfData + 2].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemTheThao.topic) +'&url=' + arrTheThao[ItemTheThao.indexOfData + 2].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrTheThao[ItemTheThao.indexOfData + 2].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                    {ItemTheThao.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrTheThao[ItemTheThao.indexOfData + 2].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemTheThao.topic) +'&url=' + arrTheThao[ItemTheThao.indexOfData + 3].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrTheThao[ItemTheThao.indexOfData + 3].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemTheThao.topic) +'&url=' + arrTheThao[ItemTheThao.indexOfData + 3].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrTheThao[ItemTheThao.indexOfData + 3].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                    {ItemTheThao.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrTheThao[ItemTheThao.indexOfData + 3].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* - */}
                        <div className="tab-pane fade" id={"tab" + ItemGiaiTri.id + "-3"} role="tabpanel">
                            <div className="row">
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemDuLich.topic) +'&url=' + arrDuLich[ItemDuLich.indexOfData].link} className="wrap-pic-w hov1 trans-03">
                                            <img src={arrDuLich[ItemDuLich.indexOfData].description} alt="IMG" />
                                        </Link>
                                        <div className="p-t-20">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemDuLich.topic) +'&url=' + arrDuLich[ItemDuLich.indexOfData].link} className="f1-m-3 cl2 hov-cl10 trans-03">
                                                    {arrDuLich[ItemDuLich.indexOfData].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                    {ItemDuLich.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrDuLich[ItemDuLich.indexOfData].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemDuLich.topic) +'&url=' + arrDuLich[ItemDuLich.indexOfData + 1].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrDuLich[ItemDuLich.indexOfData + 1].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemDuLich.topic) +'&url=' + arrDuLich[ItemDuLich.indexOfData + 1].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrDuLich[ItemDuLich.indexOfData + 1].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                    {ItemDuLich.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrDuLich[ItemDuLich.indexOfData + 1].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemDuLich.topic) +'&url=' + arrDuLich[ItemDuLich.indexOfData + 2].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrDuLich[ItemDuLich.indexOfData + 2].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemDuLich.topic) +'&url=' + arrDuLich[ItemDuLich.indexOfData + 2].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrDuLich[ItemDuLich.indexOfData + 2].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                    {ItemDuLich.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrDuLich[ItemDuLich.indexOfData + 2].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemDuLich.topic) +'&url=' + arrDuLich[ItemDuLich.indexOfData + 3].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrDuLich[ItemDuLich.indexOfData + 3].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemDuLich.topic) +'&url=' + arrDuLich[ItemDuLich.indexOfData + 3].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrDuLich[ItemDuLich.indexOfData + 3].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                    {ItemDuLich.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                    {arrDuLich[ItemDuLich.indexOfData + 3].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* - */}
                        <div className="tab-pane fade" id={"tab" + ItemGiaiTri.id + "-4"} role="tabpanel">
                            <div className="row">
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemKhoaHoc.topic) +'&url=' + arrKhoaHoc[ItemKhoaHoc.indexOfData].link} className="wrap-pic-w hov1 trans-03">
                                            <img src={arrKhoaHoc[ItemKhoaHoc.indexOfData].description} alt="IMG" />
                                        </Link>
                                        <div className="p-t-20">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemKhoaHoc.topic) +'&url=' + arrKhoaHoc[ItemKhoaHoc.indexOfData].link} className="f1-m-3 cl2 hov-cl10 trans-03">
                                                    {arrKhoaHoc[ItemKhoaHoc.indexOfData].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                {ItemKhoaHoc.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                {arrKhoaHoc[ItemKhoaHoc.indexOfData].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemKhoaHoc.topic) +'&url=' + arrKhoaHoc[ItemKhoaHoc.indexOfData + 1].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrKhoaHoc[ItemKhoaHoc.indexOfData + 1].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemKhoaHoc.topic) +'&url=' + arrKhoaHoc[ItemKhoaHoc.indexOfData + 1].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrKhoaHoc[ItemKhoaHoc.indexOfData + 1].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                {ItemKhoaHoc.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                {arrKhoaHoc[ItemKhoaHoc.indexOfData + 1].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemKhoaHoc.topic) +'&url=' + arrKhoaHoc[ItemKhoaHoc.indexOfData + 2].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrKhoaHoc[ItemKhoaHoc.indexOfData + 2].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemKhoaHoc.topic) +'&url=' + arrKhoaHoc[ItemKhoaHoc.indexOfData + 2].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrKhoaHoc[ItemKhoaHoc.indexOfData + 2].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                {ItemKhoaHoc.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                {arrKhoaHoc[ItemKhoaHoc.indexOfData + 2].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemKhoaHoc.topic) +'&url=' + arrKhoaHoc[ItemKhoaHoc.indexOfData + 3].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrKhoaHoc[ItemKhoaHoc.indexOfData + 3].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemKhoaHoc.topic) +'&url=' + arrKhoaHoc[ItemKhoaHoc.indexOfData + 3].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrKhoaHoc[ItemKhoaHoc.indexOfData + 3].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                {ItemKhoaHoc.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                {arrKhoaHoc[ItemKhoaHoc.indexOfData + 3].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* - */}
                        <div className="tab-pane fade" id={"tab" + ItemGiaiTri.id + "-5"} role="tabpanel">
                            <div className="row">
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemCuoi.topic) +'&url=' + arrCuoi[ItemCuoi.indexOfData].link} className="wrap-pic-w hov1 trans-03">
                                            <img src={arrCuoi[ItemCuoi.indexOfData].description} alt="IMG" />
                                        </Link>
                                        <div className="p-t-20">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemCuoi.topic) +'&url=' + arrCuoi[ItemCuoi.indexOfData].link} className="f1-m-3 cl2 hov-cl10 trans-03">
                                                    {arrCuoi[ItemCuoi.indexOfData].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                {ItemCuoi.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                {arrCuoi[ItemCuoi.indexOfData].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemCuoi.topic) +'&url=' + arrCuoi[ItemCuoi.indexOfData + 1].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrCuoi[ItemCuoi.indexOfData + 1].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemCuoi.topic) +'&url=' + arrCuoi[ItemCuoi.indexOfData + 1].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrCuoi[ItemCuoi.indexOfData + 1].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                {ItemCuoi.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                {arrCuoi[ItemCuoi.indexOfData + 1].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemCuoi.topic) +'&url=' + arrCuoi[ItemCuoi.indexOfData + 2].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrCuoi[ItemCuoi.indexOfData + 2].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemCuoi.topic) +'&url=' + arrCuoi[ItemCuoi.indexOfData + 2].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrCuoi[ItemCuoi.indexOfData + 2].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                {ItemCuoi.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                {arrCuoi[ItemCuoi.indexOfData + 2].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ItemGiaiTri post */}
                                    <div className="flex-wr-sb-s m-b-30">
                                        <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemCuoi.topic) +'&url=' + arrCuoi[ItemCuoi.indexOfData + 3].link} className="size-w-1 wrap-pic-w hov1 trans-03">
                                            <img src={arrCuoi[ItemCuoi.indexOfData + 3].description} alt="IMG" />
                                        </Link>
                                        <div className="size-w-2">
                                            <h5 className="p-b-5">
                                                <Link to={'/detail?active='+ active +'&title='+ encodeURIComponent(ItemCuoi.topic) +'&url=' + arrCuoi[ItemCuoi.indexOfData + 3].link} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                    {arrCuoi[ItemCuoi.indexOfData + 3].title}
                                                </Link>
                                            </h5>
                                            <span className="cl8">
                                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                {ItemCuoi.topic}
                                                </a>
                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>
                                                <span className="f1-s-3">
                                                {arrCuoi[ItemCuoi.indexOfData + 3].pubDate}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

}