import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './pages/Header'
import Footer from './pages/Footer'
import { Route, BrowserRouter } from "react-router-dom";
import About from './pages/About';
import News from './pages/News';
import Entertainment from './pages/Entertainment';
import DetailPage from './pages/DetailPage';
import { Helmet } from "react-helmet";
import Item from './pages/content/Item';

class App extends Component {

    state = {
        trang_chu: null,
        giai_tri: null,
        the_thao: null,
        du_lich: null,
        khoa_hoc: null,
        cuoi: null,
        thoi_su: null,
        the_gioi: null,
        phap_luat: null,
        giao_duc: null,
        kinh_doanh: null,
        doi_song: null,
        suc_khoe: null,
        so_hoa: null,
        xe: null,
        tam_su: null,
        noi_bat: null,
        moi_nhat: null,
        xem_nhieu: null,
    };

    // Create the function
    AddLibrary(urlOfTheLibrary) {
        const script = document.createElement('script');
        script.src = urlOfTheLibrary;
        script.async = true;
        document.body.appendChild(script);
    }

    componentDidMount() {
        //trang chu
        this.callBackendAPI('/trang_chu')
            // .then(res => this.setState({ data: res.rss }))
            .then(res => {
                // this.setState({data: res})
                this.setState({ trang_chu: res })
                //console.log("Trang chu", this.state.trang_chu)
            })
            .catch(err => console.log(err));

        //giai tri
        this.callBackendAPI('/giai_tri')
            .then(res => {
                this.setState({ giai_tri: res })
                // console.log("Giai tri", this.state.giai_tri)
            })
            .catch(err => console.log(err));

        //the thao
        this.callBackendAPI('/the_thao')
            .then(res => {
                this.setState({ the_thao: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Du lich
        this.callBackendAPI('/du_lich')
            .then(res => {
                this.setState({ du_lich: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Khoa học
        this.callBackendAPI('/khoa_hoc')
            .then(res => {
                this.setState({ khoa_hoc: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Cuoi
        this.callBackendAPI('/cuoi')
            .then(res => {
                this.setState({ cuoi: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Thoi su
        this.callBackendAPI('/thoi_su')
            .then(res => {
                this.setState({ thoi_su: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //The gioi
        this.callBackendAPI('/the_gioi')
            .then(res => {
                this.setState({ the_gioi: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Phap luat
        this.callBackendAPI('/phap_luat')
            .then(res => {
                this.setState({ phap_luat: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Giao duc
        this.callBackendAPI('/giao_duc')
            .then(res => {
                this.setState({ giao_duc: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Kinh doanh
        this.callBackendAPI('/kinh_doanh')
            .then(res => {
                this.setState({ kinh_doanh: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Doi song
        this.callBackendAPI('/doi_song')
            .then(res => {
                this.setState({ doi_song: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Suc khoe
        this.callBackendAPI('/suc_khoe')
            .then(res => {
                this.setState({ suc_khoe: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //So hoa
        this.callBackendAPI('/so_hoa')
            .then(res => {
                this.setState({ so_hoa: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Xe
        this.callBackendAPI('/xe')
            .then(res => {
                this.setState({ xe: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Tam su
        this.callBackendAPI('/tam_su')
            .then(res => {
                this.setState({ tam_su: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Noi bat
        this.callBackendAPI('/noi_bat')
            .then(res => {
                this.setState({ noi_bat: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Moi nhat
        this.callBackendAPI('/moi_nhat')
            .then(res => {
                this.setState({ moi_nhat: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Xem nhieu
        this.callBackendAPI('/xem_nhieu')
            .then(res => {
                this.setState({ xem_nhieu: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

    }
    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async (url) => {
        const response = await fetch(url);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        var giai_tri = new Item()
        var the_thao = new Item()
        var du_lich = new Item()
        var khoa_hoc = new Item()
        var cuoi = new Item()
        var thoi_su = new Item()
        var the_gioi = new Item()
        var phap_luat = new Item()
        var giao_duc = new Item()
        var kinh_doanh = new Item()
        var doi_song = new Item()
        var suc_khoe = new Item()
        var so_hoa = new Item()
        var xe = new Item()
        var tam_su = new Item()
        var noi_bat = new Item()
        var moi_nhat = new Item()
        var xem_nhieu = new Item()

        //Giải trí
        giai_tri.data = this.state.giai_tri
        giai_tri.topic = "Giải trí"
        giai_tri.id = 1
        giai_tri.indexOfData = 0
        giai_tri.link = "giai_tri"

        //The thao
        the_thao.data = this.state.the_thao
        the_thao.topic = "Thể thao"
        the_thao.id = 2
        the_thao.indexOfData = 0
        the_thao.link = "the_thao"

        //The thao
        du_lich.data = this.state.du_lich
        du_lich.topic = "Du lịch"
        du_lich.id = 3
        du_lich.indexOfData = 0
        du_lich.link = "du_lich"

        //Khoa hoc
        khoa_hoc.data = this.state.khoa_hoc
        khoa_hoc.topic = "Khoa học"
        khoa_hoc.id = 4
        khoa_hoc.indexOfData = 0
        khoa_hoc.link = "khoa_hoc"

        //Cuoi
        cuoi.data = this.state.cuoi
        cuoi.topic = "Cười"
        cuoi.id = 5
        cuoi.indexOfData = 0
        cuoi.link = "cuoi"

        //Thoi su
        thoi_su.data = this.state.thoi_su
        thoi_su.topic = "Thời sự"
        thoi_su.id = 6
        thoi_su.indexOfData = 0
        thoi_su.link = "thoi_su"

        //The gioi
        the_gioi.data = this.state.the_gioi
        the_gioi.topic = "Thế giới"
        the_gioi.id = 7
        the_gioi.indexOfData = 0
        the_gioi.link = "the_gioi"

        //Phap luat
        phap_luat.data = this.state.phap_luat
        phap_luat.topic = "Pháp luật"
        phap_luat.id = 8
        phap_luat.indexOfData = 0;
        phap_luat.link = "phap_luat"

        //Giao duc
        giao_duc.data = this.state.giao_duc
        giao_duc.topic = "Giáo dục"
        giao_duc.id = 9
        giao_duc.indexOfData = 0
        giao_duc.link = "giao_duc"

        //Kinh doanh
        kinh_doanh.data = this.state.kinh_doanh
        kinh_doanh.topic = "Kinh doanh"
        kinh_doanh.id = 10
        kinh_doanh.indexOfData = 0
        kinh_doanh.link = "kinh_doanh"

        //Doi song
        doi_song.data = this.state.doi_song
        doi_song.topic = "Đời sống"
        doi_song.id = 11
        doi_song.indexOfData = 0
        doi_song.link = "doi_song"

        //Suc khoe
        suc_khoe.data = this.state.suc_khoe
        suc_khoe.topic = "Sức khỏe"
        suc_khoe.id = 12
        suc_khoe.indexOfData = 0
        suc_khoe.link = "suc_khoe"

        //So hoa
        so_hoa.data = this.state.so_hoa
        so_hoa.topic = "Số hóa"
        so_hoa.id = 13
        so_hoa.indexOfData = 0
        so_hoa.link = "so_hoa"

        //Xe
        xe.data = this.state.xe
        xe.topic = "Xe"
        xe.id = 14
        xe.indexOfData = 0
        xe.link = "xe"

        //Tam su
        tam_su.data = this.state.tam_su
        tam_su.topic = "Tâm sự"
        tam_su.id = 15
        tam_su.indexOfData = 0
        tam_su.link = "tam_su"

        //Noi bat
        noi_bat.data = this.state.noi_bat
        noi_bat.topic = "Nổi bật"
        noi_bat.id = 16
        noi_bat.indexOfData = 0
        noi_bat.link = "noi_bat"

        //Moi nhat
        moi_nhat.data = this.state.moi_nhat
        moi_nhat.topic = "Tin mới"
        moi_nhat.id = 17
        moi_nhat.indexOfData = 0
        moi_nhat.link = "tin_moi"

        //Xem nhieu
        xem_nhieu.data = this.state.xem_nhieu
        xem_nhieu.topic = "Xem nhiều"
        xem_nhieu.id = 18
        xem_nhieu.indexOfData = 0;
        xem_nhieu.link = "xem_nhieu"

        var arr = new Array()
        arr.push(giai_tri)
        arr.push(the_thao)
        arr.push(du_lich)
        arr.push(khoa_hoc)
        arr.push(cuoi)
        arr.push(the_gioi)
        arr.push(suc_khoe)
        arr.push(so_hoa)
        arr.push(xe)
        arr.push(noi_bat)
        arr.push(tam_su)
        arr.push(moi_nhat)
        arr.push(xem_nhieu)
        arr.push(doi_song)
        arr.push(kinh_doanh)
        arr.push(phap_luat)
        arr.push(giao_duc)
        arr.push(thoi_su)

        return (

            <div>

                <BrowserRouter>

                    <Route exact path="/" >
                        <Home dataApp={this.state} tag={arr} />
                    </Route>
                    <Route path="/about" >
                        <About dataApp={this.state} />
                    </Route>

                    <Route path="/entertainment" component={Entertainment} />

                    <Route path="/detail">
                        <DetailPage dataApp={this.state} dataExtra={noi_bat} tag={arr} />
                    </Route>

                    <Route path="/tin_moi" >
                        <News dataApp={this.state} data={moi_nhat} dataExtra={noi_bat} active={1} tag={arr} />
                    </Route>

                    <Route path="/giai_tri" >
                        <News dataApp={this.state} data={giai_tri} dataExtra={noi_bat} active={2} tag={arr} />
                    </Route>

                    <Route path="/the_thao" >
                        <News dataApp={this.state} data={the_thao} dataExtra={noi_bat} active={2} tag={arr} />
                    </Route>

                    <Route path="/du_lich" >
                        <News dataApp={this.state} data={du_lich} dataExtra={noi_bat} active={2} tag={arr} />
                    </Route>

                    <Route path="/khoa_hoc" >
                        <News dataApp={this.state} data={khoa_hoc} dataExtra={noi_bat} active={2} tag={arr} />
                    </Route>

                    <Route path="/cuoi" >
                        <News dataApp={this.state} data={cuoi} dataExtra={noi_bat} active={2} tag={arr} />
                    </Route>

                    <Route path="/thoi_su" >
                        <News dataApp={this.state} data={thoi_su} dataExtra={noi_bat} active={1} tag={arr} />
                    </Route>

                    <Route path="/the_gioi" >
                        <News dataApp={this.state} data={the_gioi} dataExtra={noi_bat} active={1} tag={arr} />
                    </Route>

                    <Route path="/phap_luat" >
                        <News dataApp={this.state} data={phap_luat} dataExtra={noi_bat} active={1} tag={arr} />
                    </Route>

                    <Route path="/giao_duc" >
                        <News dataApp={this.state} data={giao_duc} dataExtra={noi_bat} active={1} tag={arr} />
                    </Route>

                    <Route path="/kinh_doanh" >
                        <News dataApp={this.state} data={kinh_doanh} dataExtra={noi_bat} active={3} tag={arr} />
                    </Route>

                    <Route path="/doi_song" >
                        <News dataApp={this.state} data={doi_song} dataExtra={noi_bat} active={4} tag={arr} />
                    </Route>

                    <Route path="/suc_khoe" >
                        <News dataApp={this.state} data={suc_khoe} dataExtra={noi_bat} active={4} tag={arr} />
                    </Route>

                    <Route path="/so_hoa" >
                        <News dataApp={this.state} data={so_hoa} dataExtra={noi_bat} active={3} tag={arr} />
                    </Route>

                    <Route path="/xe" >
                        <News dataApp={this.state} data={xe} dataExtra={noi_bat} active={3} tag={arr} />
                    </Route>

                    <Route path="/tam_su" >
                        <News dataApp={this.state} data={tam_su} dataExtra={noi_bat} active={4} tag={arr} />
                    </Route>

                    <Route path="/xem_nhieu" >
                        <News dataApp={this.state} data={xem_nhieu} dataExtra={noi_bat} active={5} tag={arr} />
                    </Route>

                    <Route path="/noi_bat" >
                        <News dataApp={this.state} data={noi_bat} dataExtra={xem_nhieu} active={5} tag={arr} />
                    </Route>

                    <Footer />
                </BrowserRouter>

                {/* <div dangerouslySetInnerHTML={{ __html: this.state.data }} /> */}

                <Helmet>
                    <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
                    {/* <!--===============================================================================================--> */}
                    <script src="vendor/animsition/js/animsition.min.js"></script>
                    {/* <!--===============================================================================================--> */}
                    <script src="vendor/bootstrap/js/popper.js"></script>
                    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                    {/* <!--===============================================================================================--> */}
                    <script src="js/main.js"></script>
                </Helmet>

            </div>


        );
    }
}

export default App;