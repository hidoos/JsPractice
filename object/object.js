@using Stone.Command.Components
@using Stone.Entity
@using CMS.Command.Components
@using CMS.Entity
@using System.Web.Mvc;
@using System.Text;
@functions {
    List<CMS_ContentContext> getChindContentList(string clidIndex, int pageNum, int istop = 0, bool isvertop = false)
    {
        ClassificationContext clidinfo = Html.CMS_Category(clidIndex);
        List<string> AllClidList = new List<string>();
        if (!clidinfo.IsEmpty())
        {
            AllClidList.Add(clidinfo.GetInfo().ClidIndex);
            foreach (ClassificationContext item in clidinfo.GetChildsClassificationContext(new PageInfo { PageSize = 10000 }))
            {
                AllClidList.Add(item.GetInfo().ClidIndex);
            }
        }
        List<CMS_ContentContext> contentlist = new List<CMS_ContentContext>();
        string istopwherestr = "";
        if (isvertop)
        {
            istopwherestr = "istop="+istop;
        }
        contentlist = Html.CMS_ContentList(
        pageNum,
        null,
        "Sort",
        istopwherestr,
        AllClidList.ToArray());
        return contentlist;
    }
}
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
    <title>酒都双拥网|仁怀</title>
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
    <meta name="keywords" content="酒都双拥网,仁怀,双拥,仁怀双拥办" />
    <meta name="description" content=" 酒都双拥网 仁怀双拥网" />
    <link rel="Shortcut Icon" href="favicon.ico" />
    <link rel="Bookmark" href="favicon.ico" />
    <link href="@Html.CMS_SkinPath("global.css")" rel="stylesheet" type="text/css" />
    <link href="@Html.CMS_SkinPath("style.css")" rel="stylesheet" type="text/css" />
    @Html.CMS_SCRIPTS_jquery()
    <script src="@Html.CMS_JsPath("banner.js")" type="text/javascript"></script>
    <script src="@Html.CMS_JsPath("vendor/swfobject_modified.js")" type="text/javascript"></script>
    <script language="javascript" type="text/javascript">
        function div1Block() {
            document.getElementById("allsort").style.display = "block";
        }
        function div1None() {
            document.getElementById("allsort").style.display = "none";
        }
    </script>
    <script src="@Html.CMS_JsPath("jquery-1.2.6.pack.js")" type="text/javascript"></script>
    <script src="@Html.CMS_JsPath("lrtk2.js")" type="text/javascript"></script>
    <script src="@Html.CMS_JsPath("TurnPictures.js")" type="text/javascript"></script>
</head>
<body>
    @Html.CMS_Partial("header")
    <div class="contact">
        <div class="contact_l fl">
            <!--招商新闻-->
            <div class="Business_News">
                <div class="Business_News_l fl">
                    <div id="zSlider2">
                        <div id="picshow2">
                            <div id="picshow_img2">
                                <ul>
                                    @foreach (CMS_ContentContext item in Html.CMS_ContentList(4, null, "Sort", null, "important_news"))
                                    {
                                        PubTableContext exinfo = item.GetPubTableContextByEx();
                                        string picturePath = "";
                                        if (!exinfo.IsEmpty())
                                        {
                                            picturePath = exinfo["picture"].ToString();
                                        }
                                        <li>
                                            <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@item.GetInfo().Title">
                                                <img src='@picturePath' width="290" height="218" />
                                            </a>
                                        </li>
                                    }
                                </ul>
                            </div>
                            <div id="picshow_tx2">
                                <ul>
                                    @foreach (CMS_ContentContext item in Html.CMS_ContentList(4, null, "Sort", null, "important_news"))
                                    {
                                        PubTableContext exinfo = item.GetPubTableContextByEx();
                                        string picturePath = "";
                                        if (!exinfo.IsEmpty())
                                        {
                                            picturePath = exinfo["picture"].ToString();
                                        }

                                        <li>
                                            <h3>
                                                <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@item.GetInfo().Title">
                                                    @Html.CMS_GetStrByLen(item.GetInfo().Title, 16)
                                                </a>
                                            </h3>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div id="select_btn2">
                            <ul>
                                @foreach (CMS_ContentContext item in Html.CMS_ContentList(4, null, "Sort", null, "important_news"))
                                {
                                    PubTableContext exinfo = item.GetPubTableContextByEx();
                                    string picturePath = "";
                                    if (!exinfo.IsEmpty())
                                    {
                                        picturePath = exinfo["picture"].ToString();
                                    }
                                    <li>
                                        <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@item.GetInfo().Title">
                                            <img src='@picturePath' width="67" height="50" />
                                        </a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <!--双拥要闻-->
                <div class="Business_News_r fl">
                    <div class="Business_News_r_tit">
                        <h2 class="fl">双拥要闻</h2>
                        <span class="fr"><a href="@Url.CMS_ActionByList("important_news")">more</a></span>
                    </div>
                    <ul>
                        @foreach (CMS_ContentContext item in Html.CMS_ContentList(7, null, "Sort", null, "important_news"))
                        {
                            <li><a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@Html.CMS_GetStrByLen(item.GetInfo().Title,20)">@Html.CMS_GetStrByLen(item.GetInfo().Title, 20)</a></li>
                        }

                    </ul>
                </div>
                <!--双拥要闻-->
            </div>
            <!-- /招商新闻-->
            <!--内容区3-->
            <div class="contact_l_3">
                <!-- 双拥动态 -->
                <div class="contact_l_3_l fl">
                    <div class="contact_l_3_l_tit">
                        <h2 class=" fl">双拥动态</h2>
                        <span class=" fr"><a href="@Url.CMS_ActionByList("supports_dynamic")">more</a></span>
                    </div>
                    <div class="contact_l_3_l_con">
                        @{
                            List<CMS_ContentContext> supportsList = new List<CMS_ContentContext>();
                            List<CMS_ContentContext> topsupportsList = new List<CMS_ContentContext>();
                            supportsList = getChindContentList("supports_dynamic", 6, 0,true);
                            topsupportsList = getChindContentList("supports_dynamic", 1, 1, true);
                        }

                        @foreach (CMS_ContentContext item in topsupportsList)
                        {
                            PubTableContext exinfo = item.GetPubTableContextByEx();
                            string picturePath = "";
                            string summary = "";
                            if (!exinfo.IsEmpty())
                            {
                                picturePath = exinfo["picture"].ToString();
                                summary = exinfo["summary"].ToString();
                            }
                            <div class="zhaiyao">
                                <div class="fl dd">
                                    <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@item.GetInfo().Title">
                                        <img src="@picturePath" width="100" height="75" />
                                    </a>
                                </div>
                                <div class="fl dt">
                                    <h3>@Html.CMS_GetStrByLen(item.GetInfo().Title, 20)</h3>
                                    <p>
                                        @Html.CMS_GetStrByLen(summary, 42)
                                        <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@item.GetInfo().Title">[详细]</a>
                                    </p>
                                </div>
                            </div>
                        }
                        <ul>
                            @foreach (CMS_ContentContext item in supportsList)
                            {
                                <li>
                                    <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@Html.CMS_GetStrByLen(item.GetInfo().Title,20)">
                                        @Html.CMS_GetStrByLen(item.GetInfo().Title, 20)
                                    </a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <!-- /双拥动态 -->
                <!-- 优抚安置 -->
                <div class="contact_l_3_l fr">
                    <div class="contact_l_3_l_tit">
                        <h2 class="fl">优抚安置</h2>
                        <span class="fr"><a href="@Url.CMS_ActionByList("groups")">more</a></span>
                    </div>
                    <div class="contact_l_3_l_con">
                        @{
                            List<CMS_ContentContext> groupsContentList = new List<CMS_ContentContext>();
                            List<CMS_ContentContext> topggroupsContentList = new List<CMS_ContentContext>();

                            groupsContentList = getChindContentList("groups", 6, 0,true);
                            topggroupsContentList = getChindContentList("groups", 1, 1,true);

                        }
                        @foreach (CMS_ContentContext item in topggroupsContentList)
                        {
                            PubTableContext exinfo = item.GetPubTableContextByEx();
                            string picturePath = "";
                            string summary = "";
                            if (!exinfo.IsEmpty())
                            {
                                picturePath = exinfo["picture"].ToString();
                                summary = exinfo["summary"].ToString();
                            }
                            <div class="zhaiyao">
                                <div class="fl dd">
                                    <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@item.GetInfo().Title">
                                        <img src="@picturePath" width="100" height="75" />
                                    </a>
                                </div>
                                <div class="fl dt">
                                    <h3>@Html.CMS_GetStrByLen(item.GetInfo().Title, 20)</h3>
                                    <p>
                                        @Html.CMS_GetStrByLen(summary, 42)
                                        <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@item.GetInfo().Title">[详细]</a>
                                    </p>
                                </div>
                            </div>
                        }
                        <ul>
                            @foreach (CMS_ContentContext item in groupsContentList)
                            {
                                PubTableContext exinfo = item.GetPubTableContextByEx();
                                <li>
                                    <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@item.GetInfo().Title">
                                        @Html.CMS_GetStrByLen(item.GetInfo().Title, 18)
                                    </a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <!-- /优抚安置-->
            </div>
            <!--内容区3-->
        </div>
        <div class="contact_r fr">
            <div class="contact_r_a">
                <div class="contact_r_a_tit">
                    <h2 class="fl">通知公告</h2>
                    <span class="fr"><a href="@Url.CMS_ActionByList("notice")">more</a></span>
                </div>
                <ul>
                    @foreach (CMS_ContentContext item in Html.CMS_ContentList(7, null, "Sort", null, "notice"))
                    {
                        <li>
                            <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@Html.CMS_GetStrByLen(item.GetInfo().Title,16)">
                                @Html.CMS_GetStrByLen(item.GetInfo().Title, 16)
                            </a>
                        </li>
                    }
                </ul>
            </div>
            <!--新闻走廊-->
            <div class="contact_r_b">
                <div class="contact_r_b_tit">
                    <h2 class="fl">政策法规</h2>
                    <span class="fr"><a href="@Url.CMS_ActionByList("regulations")">more</a></span>
                </div>
                <ul>
                    @{
                        List<CMS_ContentContext> regulationsContentList = new List<CMS_ContentContext>();
                        regulationsContentList = getChindContentList("regulations", 10);

                    }
                    @foreach (CMS_ContentContext item in regulationsContentList)
                    {
                        <li>
                            <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@Html.CMS_GetStrByLen(item.GetInfo().Title,20)">
                                @Html.CMS_GetStrByLen(item.GetInfo().Title, 16)
                            </a>
                        </li>
                    }
                </ul>
            </div>
            <!--新闻走廊-->
        </div>
    </div>
    <div class="sm_banner">
        @foreach (CMS_ContentContext item in Html.CMS_ContentList(1, null, "Sort", null, "sm_banner"))
        {
            PubTableContext exinfo = item.GetPubTableContextByEx();
            string picturePath = "";
            if (!exinfo.IsEmpty())
            {
                picturePath = exinfo["picture"].ToString();
                <img src="@picturePath" width="1080" height="150" alt="横幅" />
            }
        }
    </div>
    <div class="contact">
        <!--========左边开始============-->
        <div class="contact_l fl">
            <!-- 军民三同 -->
            <div class="Park_notice">
                <div class="Park_notice_tit">
                    <h2 class="fl">军民三同</h2>
                    <span class="fr"><a href="@Url.CMS_ActionByList("people_meet")">more</a></span>
                </div>
                @{
                    List<CMS_ContentContext> peoplemeetContentList = new List<CMS_ContentContext>();
                    List<CMS_ContentContext> toppeoplemmetContentList = new List<CMS_ContentContext>();
                    peoplemeetContentList = getChindContentList("people_meet", 7, 0,true);
                    toppeoplemmetContentList = getChindContentList("people_meet", 1, 1,true);
                }
                @foreach (CMS_ContentContext item in toppeoplemmetContentList)
                {
                    PubTableContext exinfo = item.GetPubTableContextByEx();
                    string flvPath = "";
                    if (!exinfo.IsEmpty())
                    {
                        flvPath = exinfo["videopath"].ToString();
                    }

                    <div class="Park_notice_l fl">
                        <script type="text/javascript">
                            var swf_width = 300
                            var swf_height = 180
                            var texts = '新发展视频宣传1'
                            var files = '@flvPath'
                            var config = '1:自动播放|1:连续播放|50:默认音量|0:控制栏位置|2:控制栏显示|0x000033:主体颜色|60:主体透明度|0x66ff00:光晕颜色|0xffffff:图标颜色|0xffffff:文字颜色|:logo文字|:logo地址|:结束swf地址'
                            document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="' + swf_width + '" height="' + swf_height + '">');
                            document.write('<param name="movie" value="/swf/vcastr2.swf"><param name="quality" value="high">');
                            document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
                            document.write('<param name="FlashVars" value="vcastr_file=' + files + '&vcastr_title=' + texts + '&vcastr_config=' + config + '">');
                            document.write('<embed src="@Html.CMS_SkinPath("flash/vcastr2.swf")" wmode="opaque" FlashVars="vcastr_file=' + files + '&vcastr_title=' + texts + '&vcastr_config=' + config + '" menu="false" quality="high" width="' + swf_width + '" height="' + swf_height + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'); document.write('</object>');
                        </script>
                    </div>

                }
                <div class="Park_notice_r fl">
                    <ul>
                        @foreach (CMS_ContentContext item in peoplemeetContentList)
                        {
                            <li>
                                <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@Html.CMS_GetStrByLen(item.GetInfo().Title,20)">
                                    @Html.CMS_GetStrByLen(item.GetInfo().Title, 20)
                                </a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
            <!-- /军民三同 -->
            <!-- 光荣榜 -->
            <div class="Rolling_pic">
                <div id="demo" style="overflow: hidden; margin: 15px 14px;" align="center">
                    <table border="0" cellpadding="1" cellspacing="1">
                        <tr>
                            <td bgcolor="ffffff" id="marquePic1">
                                <table border='0' cellspacing='0' height="135">
                                    <tr style="height: 87px;">
                                        @foreach (CMS_ContentContext item in Html.CMS_ContentList(6, null, "Sort", null, "honor_roll"))
                                        {
                                            PubTableContext exinfo = item.GetPubTableContextByEx();
                                            string picturePath = "";
                                            string summary = "";
                                            if (!exinfo.IsEmpty())
                                            {
                                                picturePath = exinfo["picture"].ToString();
                                                summary = exinfo["summary"].ToString();
                                            }
                                            <td align="center">
                                                <a href='@Url.CMS_ActionByShow(item.GetKey())' title='@item.GetInfo().Title' target="_blank">
                                                    <img src="@picturePath" width="120" height="87" />
                                                </a>
                                                <p>
                                                    @Html.CMS_GetStrByLen(summary, 18)
                                                </p>
                                            </td>
                                        }
                                    </tr>
                                </table>
                            </td>
                            <td id="marquePic2" valign="top"></td>
                        </tr>
                    </table>
                </div>
                <!-- /光荣榜 -->
                <script type="text/javascript">
                    var speed = 20
                    marquePic2.innerHTML = marquePic1.innerHTML
                    function Marquee() {
                        if (demo.scrollLeft >= marquePic1.scrollWidth) {
                            demo.scrollLeft = 0
                        } else {
                            demo.scrollLeft++
                        }
                    }
                    var MyMar = setInterval(Marquee, speed)
                    demo.onmouseover = function () { clearInterval(MyMar) }
                    demo.onmouseout = function () { MyMar = setInterval(Marquee, speed) }
                </script>
            </div>
        </div>
        <div class="contact_r fr">
            <!-- 国防教育 -->
            <div class="contact_r_a">
                <div class="contact_r_a_tit">
                    <h2 class=" fl">国防教育</h2>
                    <span class=" fr"><a href="@Url.CMS_ActionByList("education")">more</a></span>
                </div>
                <ul>
                    @{
                        List<CMS_ContentContext> educationContentList = new List<CMS_ContentContext>();
                        educationContentList = getChindContentList("education", 7);
                    }
                    @foreach (CMS_ContentContext item in educationContentList)
                    {
                        <li>
                            <a href='@Url.CMS_ActionByShow(item.GetKey())' target="_blank" title="@Html.CMS_GetStrByLen(item.GetInfo().Title,20)">
                                @Html.CMS_GetStrByLen(item.GetInfo().Title, 16)
                            </a>
                        </li>
                    }
                </ul>
            </div>
            <!-- /国防教育 -->
            <!--天气-->
            <div class="contact_r_e">
                <iframe width="272"
                        scrolling="no" height="122" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=19&icon=1&num=2"
                        style="padding-top: 20px; padding-left: 10px;"></iframe>
            </div>
            <!--天气-->
        </div>
    </div>
    <div class="links_logo">
        <!-- 友情链接 -->
        <div class="index_pic2">
            <div id="colee_right" style="overflow: hidden; width: 1050px; margin: auto;">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td id="colee_right1" valign="top" align="center">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <tr align="center" class="index_pic2_con2">
                                    @foreach (CMS_ContentContext item in Html.CMS_ContentList(100, null, "Sort", null, "blogroll"))
                                    {
                                        PubTableContext exinfo = item.GetPubTableContextByEx();
                                        string picturePath = "";
                                        string linkPath = "";
                                        if (!exinfo.IsEmpty())
                                        {
                                            picturePath = exinfo["picture"].ToString();
                                            linkPath = exinfo["linkpath"].ToString();
                                        }
                                        <td style="padding-left: 14px; padding-top: 9px;">
                                            <a href='@linkPath' title='@item.GetInfo().Title' target="_blank">
                                                <img src='@picturePath' alt="" width="143" height="44" />
                                            </a>
                                        </td>
                                    }
                                </tr>
                            </table>
                        </td>
                        <td id="colee_right2" valign="top"></td>
                    </tr>
                </table>
            </div>
            <script language="javascript" type="text/javascript">
                var speed = 30//速度数值越大速度越慢
                var colee_right2 = document.getElementById("colee_right2");
                var colee_right1 = document.getElementById("colee_right1");
                var colee_right = document.getElementById("colee_right");
                colee_right2.innerHTML = colee_right1.innerHTML
                function Marquee4() {
                    if (colee_right.scrollLeft <= 0)
                        colee_right.scrollLeft += colee_right2.offsetWidth
                    else {
                        colee_right.scrollLeft--
                    }
                }
                var MyMar4 = setInterval(Marquee4, speed)
                colee_right.onmouseover = function () { clearInterval(MyMar4) }
                colee_right.onmouseout = function () { MyMar4 = setInterval(Marquee4, speed) }
            </script>
        </div>
    </div>
    @Html.CMS_Partial("footer")
</body>
</html>