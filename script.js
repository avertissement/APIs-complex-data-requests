function perform() {

    $('form').on('submit', function(e){
        e.preventDefault();
        $('.result').empty()
        funFetch()
    })

    function progressive(response) {
        const stateInput1 = $('.input').find('.parks').val();
        const stateInput2 = $('.input').find('.parks2').val();
        const stateInput3 = $('.input').find('.parks3').val();
        const numberInput = $('.second-input').find('input').val();
        const representation = response.data;
        let sum = 0;
            for(let i=0; i<representation.length; i++) {
                if(representation[i].addresses[0].stateCode == stateInput1) {
                    const nameVal1 = representation[i].fullName;
                    const descriptionVal1 = representation[i].description;
                    const websiteVal1 = representation[i].url;
                    const stateVal1 = representation[i].addresses[0].stateCode;
                    if(sum < numberInput) {
                    display(nameVal1, descriptionVal1, websiteVal1, stateVal1)
                    };
                    sum+=1;
                }
                else if(representation[i].addresses[0].stateCode == stateInput2) {
                    const nameVal2 = representation[i].fullName;
                    const descriptionVal2 = representation[i].description;
                    const websiteVal2 = representation[i].url;
                    const stateVal2 = representation[i].addresses[0].stateCode;
                    if(sum < numberInput) {
                    display(nameVal2, descriptionVal2, websiteVal2, stateVal2)
                    };
                    sum+=1;
                }
                else if(representation[i].addresses[0].stateCode == stateInput3) {
                    const nameVal3 = representation[i].fullName;
                    const descriptionVal3 = representation[i].description;
                    const websiteVal3 = representation[i].url;
                    const stateVal3 = representation[i].addresses[0].stateCode;
                    if(sum < numberInput) {
                    display(nameVal3, descriptionVal3, websiteVal3, stateVal3)
                    };
                    sum+=1;
                }
            }
    }

    function display(nameFinal, descriptionFinal, websiteFinal, stateFinal) {
        $('.result').append(`
        <h3>${nameFinal} - ${stateFinal}</h3>
        <h4>${websiteFinal}</h4>
        <p>${descriptionFinal}</p>
        `)
        $('input').val('')
    }

    function funFetch() {
    fetch('https://developer.nps.gov/api/v1/parks?api_key=ed4EEIpFODaErkNqu2sDg2FsLLVQjNXSBEPOG6ae')
    .then(response => response.json())
    .then(responseJson => progressive(responseJson))
    }
}

$(perform)