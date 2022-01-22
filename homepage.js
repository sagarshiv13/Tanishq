var i = 0;
var images = [];
var time = 4000;


images[0] = 'https://www.tanishq.co.in/wps/wcm/connect/tanishq/71c83b4a-3ff6-4fa5-8b57-77ce4e5fc212/desktop/G-banner-2500x950-min.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-71c83b4a-3ff6-4fa5-8b57-77ce4e5fc212-desktop-nT1qSdy&impolicy=pqlow';
images[1] = 'https://www.tanishq.co.in/wps/wcm/connect/tanishq/39ac127c-628a-4506-aaf8-d73828e3aecb/desktop/Tanishq_Diwali_Homepage_Banner_2500x950-min.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-39ac127c-628a-4506-aaf8-d73828e3aecb-desktop-nPzRBjo&impolicy=pqlow';
images[2] = 'https://www.tanishq.co.in/wps/wcm/connect/tanishq/f8533026-01f0-47ae-a596-2f87424db13f/desktop/homepage-banner-2500x950-under-350kbs-min.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-f8533026-01f0-47ae-a596-2f87424db13f-desktop-nQjIqe5&impolicy=pqlow';

function changeImg() {
    document.slide.src = images[i];


    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;