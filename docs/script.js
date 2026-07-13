const feature = document.getElementById("feature");

const features = [
    "Eigenschaft 1",
    "Eigenschaft 2",
    "Eigenschaft 3"
];

let index = 0;
function changeFeature() {
    feature.animate(
        [
            { transform: "translateY(0)", opacity: 1 },
            { transform: "translateY(-200%)", opacity: 0 }
        ],
        {
            duration: 600,
            fill: "forwards",
            easing: "ease-in-out"
        }
    ).onfinish = () => {
        index = (index + 1) % features.length;
        feature.textContent = features[index];

        feature.animate(
            [
                { transform: "translateY(200%)", opacity: 0 },
                { transform: "translateY(0)", opacity: 1 }
            ],
            {
                duration: 600,
                fill: "forwards",
                easing: "ease-in-out"
            }
        );
    };
}

setInterval(changeFeature, 3000);