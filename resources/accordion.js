const questionList = Object.keys(_questions).map(q=>
`<button class="accordion">`+q+`</button>
<div class="panel">
  `+_questions[q].map(x=>`<li class="question">`+x.name+`</li>`).join('')+`
</div>`).join('');

questions.innerHTML = questionList;


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}