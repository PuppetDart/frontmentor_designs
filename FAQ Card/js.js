// body -> #cards -> [#questions -> span.question]
var ques_list = document.querySelectorAll('.question')
var prev_clicked = null

//.question .bold     .status_arrow .up     .answer .answer_visible

var change_status = (element) => {
    element.classList.toggle('bold')

    // [span.question -> TEXT + img.status_arrow]
    element.querySelector('.status_arrow').classList.toggle('up')

    // span.question (nextSibling) -> p.answer    
    element.nextElementSibling.classList.toggle('answer_visible')
}

for (const current_ques of ques_list) {
    current_ques.addEventListener('click', () => {

        change_status(current_ques)

        if (prev_clicked == current_ques) {
            prev_clicked = null
        }
        else if (prev_clicked != null) {
            change_status(prev_clicked)
            prev_clicked = current_ques
        }
        else if (prev_clicked == null) {
            prev_clicked = current_ques
        }
    })
}