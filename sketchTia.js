let j;
function setup() {
    // put setup code here
    createCanvas(300,300)
    createCanvas((windowWidth/2), windowHeight/2);

    x = 199;
    y = 199;
    j = 0;

    rectWidth = 90;
    rectHeigth = 90;

    N = 44
    L = 7;
    P = N - L;

    
}

function windowResized() {
    resizeCanvas(windowWidth);
}


function draw() {
    background(240,200,240)
    stroke("WHITE")
    strokeWeight(7)
    line(windowWidth/2, 0, windowWidth/2, windowHeight)
    line(0, windowHeight, windowHeight/2, windowHeight)
    line(334,0,334,334)

    var y = 200 + 15 * Math.sin(PI/10*j)
    j+=0.45

    strokeWeight(0);
    fill("GOLD")
    ellipse(x-62, y-90, rectHeigth-70, rectWidth-40)

    fill("GOLD")
    ellipse(x-80, y-15, rectHeigth-70, rectWidth-70)

    fill("YELLOW")
    ellipse(x-85, y-15, rectHeigth-70, rectWidth-70)

    fill("GOLD")
    strokeWeight(0)
    arc(x-47, y-50 , rectWidth, rectHeigth, 0, 2*PI *P/N);

    fill("YELLOW")
    strokeWeight(0)
    arc(x-50, y-50 , rectWidth, rectHeigth, 0, 2*PI *P/N);

    fill("BLACK")
    ellipse(x-50, y-75, rectHeigth-80, rectWidth-80)

    fill("WHITE")
    ellipse(x-50, y-77, rectHeigth-85, rectWidth-85)

    fill("RED")
    ellipse(x-30, y-60, rectHeigth-83, rectWidth-83)
    
    fill("RED")
    ellipse(x-20, y-70, rectHeigth-83, rectWidth-83)

    fill("RED")
    ellipse(x-5, y-70, rectHeigth-83, rectWidth-83)

    fill("YELLOW")
    ellipse(x-70, y-95, rectHeigth-70, rectWidth-40)

    fill("GOLD")
    ellipse(x+287, y-90, rectHeigth-70, rectWidth-40)

    fill("YELLOW")
    ellipse(x+265, y-15, rectHeigth-70, rectWidth-70)

    fill("GOLD")
    strokeWeight(0)
    arc(x+303, y-50 , rectWidth, rectHeigth, 0, 2*PI *P/N);

    fill("YELLOW")
    strokeWeight(0)
    arc(x+300, y-50 , rectWidth, rectHeigth, 0, 2*PI *P/N);

    fill("BLACK")
    ellipse(x+300, y-75, rectHeigth-80, rectWidth-80)

    fill("WHITE")
    ellipse(x+300, y-77, rectHeigth-85, rectWidth-85)

    fill("RED")
    ellipse(x+320, y-60, rectHeigth-83, rectWidth-83)
    
    fill("RED")
    ellipse(x+330, y-70, rectHeigth-83, rectWidth-83)

    fill("RED")
    ellipse(x+344, y-70, rectHeigth-83, rectWidth-83)

    fill("YELLOW")
    ellipse(x+280, y-95, rectHeigth-70, rectWidth-40)

    
}