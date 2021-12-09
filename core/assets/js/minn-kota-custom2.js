window.onload = function () {

    const countryPick = document.querySelector('.country-picker');
    const selectNZ = document.querySelector('.select-nz');

    countryPick.addEventListener('click', selectCountry);
    selectNZ.addEventListener('click', gotoNz);

    function selectCountry() {
        countryPick.classList.toggle('active');
    }

    function gotoNz() {
        window.location = 'https://minnkota.co.nz';
    }

    window.addEventListener('click', function (e) {
        if (countryPick.contains(e.target)) {
            // Clicked in box
        } else {
            countryPick.classList.remove('active');
        }
    });





    // // Pro Guides Map Filter


    const filterWA = document.querySelector('.filter-cat-261');
    const filterNT = document.querySelector('.filter-cat-260');
    const filterQLD = document.querySelector('.filter-cat-258');
    const filterNSW = document.querySelector('.filter-cat-259');
    const filterSA = document.querySelector('.filter-cat-262');
    const filterVIC = document.querySelector('.filter-cat-263');
    const filterTAS = document.querySelector('.filter-cat-264');

    const popperEl = document.getElementById('popper');
    let popperInstance;

    const getHex = (value) => {
        return value.toString(16).padStart(2, '0')
    }

    const getColor = (ratio) => {
        const color1 = '333333';
        const color2 = 'ffffff';

        if (!isFinite(ratio)) { return '#' + color1 }

        const r = Math.ceil(parseInt(color1.substring(0, 2), 16) * ratio + parseInt(color2.substring(0, 2), 16) * (1 - ratio))
        const g = Math.ceil(parseInt(color1.substring(2, 4), 16) * ratio + parseInt(color2.substring(2, 4), 16) * (1 - ratio))
        const b = Math.ceil(parseInt(color1.substring(4, 6), 16) * ratio + parseInt(color2.substring(4, 6), 16) * (1 - ratio))

        return '#' + getHex(r) + getHex(g) + getHex(b)
    }

    const data = {
        AUS2651: 0, //Western Australia
        AUS2650: 3, //Northern Territory
        AUS2657: 10, //Queensland
        AUS2655: 0, //South Australia
        AUS2654: 1, //New South Wales
        AUS2656: 0, //Victoria
        AUS2660: 0, //Tasmania
        AUS2653: 0 //Australian Capital Territory

    }

    fetch('https://simplemaps.com/static/svg/au/au.svg')
        .then(response => response.text())
        .then((image) => {
            let startOfSvg = image.indexOf('<svg')
            startOfSvg = startOfSvg >= 0 ? startOfSvg : 0

            const draw = SVG(image.slice(startOfSvg))
                .addTo('#map-proguides')
                .size('100%', 550)
                //.panZoom()

            // get maximum value among the supplied data
            const max = Math.max(...Object.values(data))

            for (const region of draw.find('path')) {
                const regionValue = data[region.id()]

                if (isFinite(regionValue)) {
                    // color the region based on it's value with respect to the maximum
                    region.fill(getColor(regionValue / max))

                    // show region value as a label
                    draw.text(regionValue.toString())
                        .font({
                            size: '24px'
                        })
                        .center(region.cx(), region.cy())
                }

                // show region data when clicking on it
                region.on('click', () => {
                    // alert(`${region.attr('name')} (${region.id()}): ${regionValue}`)
                    if (region.attr('name') === 'Western Australia') {
                        console.log(`selected WA`);
                        filterWA.getElementsByTagName('a')[0].click();
                    }

                    if (region.attr('name') === 'Northern Territory') {
                        console.log(`selected NT`);
                        filterNT.getElementsByTagName('a')[0].click();
                    }

                    if (region.attr('name') === 'Queensland') {
                        console.log(`selected QLD`);
                        filterQLD.getElementsByTagName('a')[0].click();
                    }

                    if (region.attr('name') === 'New South Wales') {
                        console.log(`selected NSW`);
                        filterNSW.getElementsByTagName('a')[0].click();
                    }

                    if (region.attr('name') === 'South Australia') {
                        console.log(`selected SA`);
                        filterSA.getElementsByTagName('a')[0].click();
                    }

                    if (region.attr('name') === 'Victoria') {
                        console.log(`selected VIC`);
                        filterVIC.getElementsByTagName('a')[0].click();
                    }

                    if (region.attr('name') === 'Tasmania') {
                        console.log(`selected TAS`);
                        filterTAS.getElementsByTagName('a')[0].click();
                    }
                })

                region.on('mouseover', () => {
                    popperEl.innerText = `${region.attr('name')} ${regionValue}`
                    popperEl.style.visibility = 'visible'
                    popperInstance = Popper.createPopper(region.node, popperEl, { placement: 'bottom' })
                })

                region.on('mouseleave', () => {
                    popperEl.style.visibility = 'hidden'
                })
            }
        })









}