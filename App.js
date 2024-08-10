import React from "react";
import "./App.css";

function Catalog(){
    function Click(){
        alert('Exclusive, handsome, and massively powerful, the Aston Martin Vantage offers a dignified take on the high-performance grand touring car blueprint. Featuring a new 656-hp twin-turbo V-8, a revised interior, and several deceivingly minor exterior updates, the 2025 Vantage is improved in every metric.');

    }
    function bmwClick(){
        alert ('Exclusive, handsome, and massively powerful, the Aston Martin Vantage offers a dignified take on the high-performance grand touring car blueprint. Featuring a new 656-hp twin-turbo V-8, a revised interior, and several deceivingly minor exterior updates, the 2025 Vantage is improved in every metric.')
    }
    function maclarenClick(){
        alert('The McLaren P1 is a hybrid hypercar with a 903-horsepower engine that combines a twin-turbo V8 with an electric motor. It accelerates from 0-60 mph in just 2.7 seconds, offering extreme performance and advanced aerodynamics. With its striking design and cutting-edge technology, the P1 delivers a thrilling and exclusive driving experience.');
    }
    function porscheClick(){
        alert('The Porsche 911 GT3 RS is a track-focused sports car with a naturally aspirated 4.0-liter flat-six engine producing 518 horsepower. It accelerates from 0-60 mph in just 3.0 seconds. Designed for precision and agility, the GT3 RS features advanced aerodynamics, lightweight materials, and a race-inspired interior for an unmatched driving experience.');
    }
    function ferariClick(){
        alert('The Ferrari SF90 is a hybrid supercar with a combined 986-horsepower from a twin-turbo V8 and three electric motors. It accelerates from 0-60 mph in 2.5 seconds, blending cutting-edge technology with Ferraris iconic design. The SF90 offers a thrilling driving experience, showcasing the perfect fusion of power, speed, and innovation.');
    }
    function maclaren720Click(){
        alert('The McLaren 720S is a supercar powered by a 710-horsepower twin-turbo V8 engine, reaching 0-60 mph in just 2.8 seconds. With its lightweight construction, aerodynamic design, and cutting-edge technology, the 720S offers an exhilarating driving experience, combining speed, agility, and McLarens signature style.');
    }
    function mercedezClick(){
        alert('The Mercedes-AMG GT is a high-performance sports car powered by a handcrafted 4.0-liter twin-turbo V8 engine, delivering up to 720 horsepower. It accelerates from 0-60 mph in just 3.1 seconds. With its bold design, precise handling, and luxurious interior, the AMG GT offers a thrilling and refined driving experience.');
    }
    function nissanClick(){
        alert('The Nissan GT-R R35 is a high-performance sports car featuring a 3.8-liter twin-turbo V6 engine that delivers 565 horsepower. It accelerates from 0-60 mph in just 2.9 seconds. Known as "Godzilla," the GT-R R35 combines advanced all-wheel-drive technology, aggressive styling, and precise handling for an exhilarating driving experience.');
    }
    function  supraRead(){
        alert('The Toyota Supra MK5 is a dynamic sports car equipped with a 3.0-liter turbocharged inline-six engine, producing 382 horsepower. It accelerates from 0-60 mph in just 3.8 seconds. With its sleek design, agile handling, and performance-focused features, the MK5 Supra delivers an exhilarating driving experience.');
    }
    function gle(){
        alert('The Mercedes-Benz GLE 600 is a luxury SUV powered by a robust 4.0-liter twin-turbo V8 engine, delivering around 603 horsepower. It accelerates from 0-60 mph in approximately 4.0 seconds. Combining high-performance with advanced technology, a sophisticated interior, and commanding presence, the GLE 600 offers a refined and exhilarating driving experience.');
    }
    function x5(){
        alert('The BMW X5 is a versatile luxury SUV with a range of powerful engines, including a 3.0-liter inline-six producing up to 523 horsepower. It accelerates from 0-60 mph in as little as 4.1 seconds. Featuring advanced technology, a spacious interior, and dynamic handling, the X5 combines performance with comfort and practicality for an exceptional driving experience.');
    }
    return(
        <div className="catalog">
            <h1>
                our cataloge
            </h1>
            <p>
                Aston martin vantage
            </p>
            <button className="astonMartingRead" onClick={Click}>
                read more
            </button>
            <br/>
            <p>
                BMW m4 competition
            </p>
            <button className="BMWM4Read" onClick={bmwClick}>
                read more
            </button>
            <br/>
            <p>
                maclaren p1
            </p>
            <button className="maclarenRead" onClick={maclarenClick}>
                read more
            </button>
            <br/>
            <p>
                porsche 911 gt3 rs
            </p>
            <button className="porscheRead" onClick={porscheClick}>
                read more
            </button>
            <br/>
            <p>
                Ferari sf 90
            </p>
            <button className="ferrariRead" onClick={ferariClick}>
                read more
            </button>
            <br/>
            <p>
                maclaren 720s
            </p>
            <button className="maclaren720Read" onClick={maclaren720Click}>
                read more
            </button>
            <br/>
            <p>
                mercede-benz amg gt
            </p>
            <button className="mercedez" onClick={mercedezClick}>
                read more
            </button>
            <br/>
            <p>
                nissan gtr r35
            </p>
            <button className="nissanRead" onClick={nissanClick}>
                read more
            </button>
            <p>
                toyota supra mk5
            </p>
            <button className="supraRead" onClick={supraRead}>
                read more
            </button>
            <p>
                mercedez gle 600
            </p>
            <button className="mercdezGleRead" onClick={gle}>
                read more
            </button>
            <p>
                BMW x5
            </p>
            <button className="BMWX5" onClick={x5}>
                read more
            </button>
        </div>
    );
}
export default Catalog;