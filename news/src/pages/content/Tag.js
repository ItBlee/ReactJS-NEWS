import { Link } from "react-router-dom"

function tag(arr) {
    var tags = new Array()
    for (var i = 0; i < arr.length && i < 15; i++) {
        tags.push(
            <Link to={arr[i].link} className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                {arr[i].topic}
            </Link>
        )
    }
    return tags
}

export default function Tag(props) {
    
    var arr = props.tag

    if (arr) {
        return (
            <div>
                {/* Tag */}
                <div className="p-b-55">
                    <div className="how2 how2-cl4 flex-s-c m-b-30">
                        <h3 className="f1-m-2 cl3 tab01-title">
                            Thẻ
                        </h3>
                    </div>
                    <div className="flex-wr-s-s m-rl--5">
                        {tag(arr)}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}