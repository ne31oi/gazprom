/* jQuery anchor link */
$(function() {
    $('a[href^="#"]').on('click', function(event) {
        var href = $(this).attr('href'),
            target = $(href == '#' || href == '' ? 'html' : href),
            position = target.offset().top;
        $('body, html').animate({ scrollTop: position }, 250, 'swing');
        event.preventDefault();
    });
});

/* Check for device type */
var detectDeviceType = function detectDeviceType() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop');
};

/* Check if element is visible */
var elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {
    var partiallyVisible = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    var _el$getBoundingClient = el.getBoundingClientRect();

    var top = _el$getBoundingClient.top;
    var left = _el$getBoundingClient.left;
    var bottom = _el$getBoundingClient.bottom;
    var right = _el$getBoundingClient.right;
    var _window = window;
    var innerHeight = _window.innerHeight;
    var innerWidth = _window.innerWidth;

    return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

$(document).ready(function() {
    document.querySelectorAll(".plus").forEach(function(el) {
        el.innerHTML = "<div class='plus_inner'></div>";
    });

});

var controller = new ScrollMagic.Controller();
var tween = TweenMax.to(".data-item1", 0.5, { rotation: 0 });

var scene = new ScrollMagic.Scene({ triggerElement: "header", duration: $("header").outerHeight() * 1.5 })
    .addTo(controller)
    .on("progress", function(e) {
        var half = $(window).height() / 2;
        var proc = half / ($("header").outerHeight() * 1.5);
        if (mesh) {
            mesh.rotation.x = -0.15 * (e.progress - proc);
            var head_text = document.querySelector(".head_text");
            head_text.style.zIndex = (e.progress > 0.75) ? 2 : 3;
            $(".head_text h1").css({ "transform": "scale(" + (1 - (e.progress - proc)) + ") translateY(-" + 300 * (e.progress - proc) + "px)", "opacity": 1 - (e.progress - proc) });
            $(".head_text .subtext").css({ "transform": "scale(" + (1 - (e.progress - proc)) + ") translateY(-" + 370 * (e.progress - proc) + "px)", "opacity": 1 - (e.progress - proc) });
        }
    });

var scene = new ScrollMagic.Scene({ triggerElement: ".scroll-text", duration: $(".scroll-text").height() })
    .setTween(TweenMax.to(".scroll-text", 0.5, { x: -($(".scroll-text-sub").width() * 1.5) }))
    .addTo(controller);

var tween = TweenMax.to(".data-item", 0.5, { rotation: 0 });

var scene = new ScrollMagic.Scene({ triggerElement: ".years", duration: $(".years").outerHeight() })
    .setTween(tween)
    .addTo(controller)
    .on("progress", function(e) {
        $(".data-item").each(function() {
            var n = Math.round(parseInt($(this).find("span").attr("data-num"))),
                no = parseInt($(this).find("span").attr("data-num-old")),
                diff = no - n;
            $(this).find("span").text(Math.round(n + e.progress.toFixed(1) * diff) + "%");

        });
        $(".year").text(2018 + Math.round(e.progress.toFixed(1) * 22));
    });
var scene = new ScrollMagic.Scene({ triggerElement: "#img4_3", duration: $("#img4_3").outerHeight() })
    .setTween(tween)
    .addTo(controller)
    .on("progress", function(e) {
        $("#img4_3").css({ "width": 100 * e.progress + "%" });
        if (e.progress < 0.44) {
            $("#img4_1").css({ "width": 0 });
        } else if (e.progress < 0.51) {
            $("#img4_1").css({ "width": '48%' });
        } else if (e.progress < 0.57) {
            $("#img4_1").css({ "width": "55%" });
        } else if (e.progress < 0.64) {
            $("#img4_1").css({ "width": "60%" });
        } else { $("#img4_1").css({ "width": "80%" }); }
    });
var scene = new ScrollMagic.Scene({ triggerElement: "#img7_1", duration: $("#img7_1").outerHeight() / 1.5 })
    .setTween(tween)
    .addTo(controller)
    .on("progress", function(e) {
        $("#img7_3").css({ "width": 100 * e.progress + "%" });
        $("#img7_2").css({ "width": 100 * e.progress + "%" });
        if (e.progress < 0.02) {
            $("#img7_4").css({ "width": 0 });
            $("#img7_5").css({ "width": 0 });
            $("#img7_6").css({ "width": 0 });
            $("#img7_7").css({ "width": 0 });
        } else if (e.progress < 0.15) {
            $("#img7_4").css({ "width": '5%' });
            $("#img7_5").css({ "width": '27%' });
            $("#img7_6").css({ "width": '27%' });
            $("#img7_7").css({ "width": 0 });
        } else if (e.progress < 0.27) {
            $("#img7_4").css({ "width": "17%" });
            $("#img7_5").css({ "width": '27%' });
            $("#img7_6").css({ "width": '27%' });
            $("#img7_7").css({ "width": 0 });
        } else if (e.progress < 0.40) {
            $("#img7_4").css({ "width": "33%" });
            $("#img7_5").css({ "width": '40%' });
            $("#img7_6").css({ "width": '27%' });
            $("#img7_7").css({ "width": 0 });
        } else if (e.progress < 0.53) {
            $("#img7_4").css({ "width": "44%" });
            $("#img7_5").css({ "width": '80%' });
            $("#img7_6").css({ "width": '100%' });
            $("#img7_7").css({ "width": 0 });
        } else if (e.progress < 0.65) {
            $("#img7_4").css({ "width": "56%" });
            $("#img7_5").css({ "width": '80%' });
            $("#img7_6").css({ "width": '100%' });
            $("#img7_7").css({ "width": 0 });
        } else if (e.progress < 0.80) {
            $("#img7_4").css({ "width": "74%" });
            $("#img7_5").css({ "width": '80%' });
            $("#img7_6").css({ "width": '100%' });
            $("#img7_7").css({ "width": '100%' });
        } else {
            $("#img7_4").css({ "width": "100%" });
            $("#img7_5").css({ "width": '100%' });
            $("#img7_6").css({ "width": '100%' });
            $("#img7_7").css({ "width": '100%' });
        }
    });
var scene = new ScrollMagic.Scene({ triggerElement: ".answ1 .fade", duration: $(".answ1 .fade").outerHeight() + 300 })
    .setTween(tween)
    .addTo(controller)
    .on("progress", function(e) {
        var top = $(".answ1 .fade").outerHeight() * e.progress;
        $(".answ1").css({ "margin-bottom": "-" + ($(".answ1 .fade").outerHeight() - top) + "px" });

        $(".section04").css({ "opacity": e.progress });

    });
var drawGrid = function(w, h, id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = $("body").width();
    ctx.canvas.height = $("body").height();

    var data = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
        <defs> \
            <pattern id="smallGrid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#005AA6" stroke-width="0.5" /> \
            </pattern> \
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                <rect width="80" height="80" fill="url(#smallGrid)" /> \
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1" /> \
            </pattern> \
        </defs> \
        <rect width="100%" height="100%" fill="url(#smallGrid)" /> \
    </svg>';

    var DOMURL = window.URL || window.webkitURL || window;

    var img = new Image();
    var svg = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
    var url = DOMURL.createObjectURL(svg);

    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        DOMURL.revokeObjectURL(url);
    }
    img.src = url;
}


var scene, renderer;
var camera;
var mesh;

var isMouseDown = false;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 53.84;
    camera.position.y = 3;
    camera.position.x = -2;
    var canva = document.getElementById("main-canvas");
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(canva.offsetWidth, canva.offsetHeight);
    canva.appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0);
    var sphere = new THREE.SphereBufferGeometry(1, 16, 8);
    var light = new THREE.DirectionalLight("#72f4ff", 1);
    var light1 = new THREE.DirectionalLight("#72f4ff", 1);
    var light2 = new THREE.DirectionalLight("#72f4ff", 1);
    var light3 = new THREE.DirectionalLight("#72f4ff", 1);
   /* light.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 })));
    light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xf500ff })));
    light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x0a00ff })));
    light3.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x00fff5 })));*/
    var ambient = new THREE.AmbientLight("#85b2cd");

    /*ambient.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x0000ff })));
    //light.color.setHSL( 0, 0, 1 );
    light.position.set(-30, 30, 25);
    light1.position.set(30, 30, 25);
    light2.position.set(-30, -30, 25);
    light3.position.set(30, -30, 25);*/


    var materials = [];

    scene.fog = new THREE.Fog(0x01012f, -20, 60);

    var manager = new THREE.LoadingManager();
    manager.onProgress = function(item, loaded, total) {};
    var onProgress = function(xhr) {};
    var onError = function(xhr) {};

    var loader = new THREE.GLTFLoader();

    loader.load(
        'assets/Wire10.glb',
        function(gltf) {

            var texture = new THREE.Texture(generateTexture());
            texture.needsUpdate = true;

            materials.push(new THREE.MeshLambertMaterial({ map: texture, transparent: true }));
            materials.push(new THREE.MeshLambertMaterial({ color: 0xdddddd }));
            materials.push(new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x009900, shininess: 30, flatShading: true }));
            materials.push(new THREE.MeshNormalMaterial());

            materials.push(new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending }));
            materials.push(new THREE.MeshBasicMaterial({ color: 0x3c88b8, transparent: true }));

         /*   materials.push(new THREE.MeshLambertMaterial({ color: 0xdddddd }));
            materials.push(new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x009900, shininess: 30, map: texture, transparent: true }));
            materials.push(new THREE.MeshNormalMaterial({ flatShading: true }));

            materials.push(new THREE.MeshBasicMaterial({ color: 0xffaa00, wireframe: true }));

            materials.push(new THREE.MeshDepthMaterial());
            materials.push(new THREE.MeshLambertMaterial({ color: 0x666666, emissive: 0xff0000 }));
            materials.push(new THREE.MeshPhongMaterial({ color: 0x000000, specular: 0x666666, emissive: 0xff0000, shininess: 10, opacity: 0.9, transparent: true }));
            materials.push(new THREE.MeshBasicMaterial({ map: texture, transparent: true }));*/


            mesh = gltf.scene;
            mesh.scale.set(40, 40, 40);
            mesh.rotation.y = -0.2;
            console.log(mesh)
            mesh.traverse((o) => {
                if (o.isMesh) o.material = materials[5];
            });
            scene.add(mesh);


        },
        function(xhr) {},
        function(error) {

            console.log('An error happened', error);

        }
    );


    render();
    $("#quiz1 .part__quiz__item").on("click", function(e) {
        if ($(this).hasClass("item4")) {
            $(".part__answer.answer1.false").hide();
            $(".part__answer.answer1.true").css('display', 'flex');
            $("#quiz1 .part__quiz__item").removeClass('false');
            $(this).addClass('true');
        } else {
            $(".part__answer.answer1.false").css('display', 'flex');
            $(".part__answer.answer1.true").hide();
            $("#quiz1 .part__quiz__item").removeClass('false');
            $("#quiz1 .part__quiz__item").removeClass('true');
            $(this).addClass('false');
        }
    });
    $("#quiz2 .part__quiz__item").on("click", function(e) {
        if ($(this).hasClass("item3")) {
            $(".part__answer.answer2.false").hide();
            $(".part__answer.answer2.true").css('display', 'flex');
            $("#quiz2 .part__quiz__item").removeClass('false');
            $(this).addClass('true');
        } else {
            $(".part__answer.answer2.false").css('display', 'flex');
            $(".part__answer.answer2.true").hide();
            $("#quiz2 .part__quiz__item").removeClass('false');
            $("#quiz2 .part__quiz__item").removeClass('true');
            $(this).addClass('false');
        }
    });
}

function generateTexture() {

    var canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;

    var context = canvas.getContext('2d');
    var image = context.getImageData(0, 0, 256, 256);

    var x = 0,
        y = 0;

    for (var i = 0, j = 0, l = image.data.length; i < l; i += 4, j++) {

        x = j % 256;
        y = x == 0 ? y + 1 : y;

        image.data[i] = 255;
        image.data[i + 1] = 255;
        image.data[i + 2] = 255;
        image.data[i + 3] = Math.floor(x ^ y);

    }
    context.putImageData(image, 0, 0);
    return canvas;
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
window.addEventListener('DOMContentLoaded', init);