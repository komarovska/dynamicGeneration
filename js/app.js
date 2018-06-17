 (function createElems() {
        var wrapper = document.createElement('div');
        wrapper.className = "container";
        
        document.body.appendChild(wrapper);

        var title = document.createElement('h1');
        title.className = "title";
        title.innerHTML = "Тест по программированию";
        wrapper.appendChild(title);

        var questions = document.createElement('div');
        questions.className = "questions-container";
        wrapper.appendChild(questions);

        var question1 = document.createElement('div')
        question1.className = "question-container";
        questions.appendChild(question1);

        var questionTitle = document.createElement('h3')
        questionTitle.className = "question__title";
        questionTitle.innerHTML = "Вопрос <span>1</span>";
        question1.appendChild(questionTitle);

        var option = [];
            for (var i = 0; i < 3 ; ++i) {
            option[i] = document.createElement('div');
            question1.appendChild(option[i]);
        }

        var label = [];
            for (var i = 0; i < 3 ; ++i) {
            label[i] = document.createElement('label');
            label[i].className = "label";
            label[i].innerHTML = "Ответ "+(i+1);
            option[i].appendChild(label[i]);
        }

        var checkbox = [];
            for (var i = 0; i < 3 ; ++i) {
            checkbox[i] = document.createElement('input');
            checkbox[i].className = "checkbox";
            checkbox[i]['type']= "checkbox";
            label[i].appendChild(checkbox[i]);
        }
        
        var question2 = question1.cloneNode(true);
        question2.querySelector("span").innerHTML = "2";
        questions.appendChild(question2);

        var question3 = question1.cloneNode(true);
        question3.querySelector("span").innerHTML = "3";
        questions.appendChild(question3);

        var last = document.createElement('button');
        last.className = "btn btn-primary btn-center";
        last.innerHTML = "Проверить мои результаты.";
        wrapper.appendChild(last);

    })();
