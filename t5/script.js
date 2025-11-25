    const groupsData = {
        "Group 1": ["Student 1", "Student 2", "Student 3"],
        "Group 2": ["Ivanov I.", "Petrov P.", "Sidorov S."]
    };

    let savedSessions = [];

    window.onload = function() {
        const groupSelect = document.getElementById('groupSelect');
        for (let groupName in groupsData) {
            let option = document.createElement('option');
            option.value = groupName;
            option.innerText = groupName;
            groupSelect.appendChild(option);
        }
    };

    function loadLesson() {
        const group = document.getElementById('groupSelect').value;
        const lesson = document.getElementById('lessonSelect').value;
        const topicInput = document.getElementById('topicInput');
        const saveBtn = document.getElementById('saveBtn');
        const tbody = document.getElementById('studentsList');

        tbody.innerHTML = ''; 

        const existingSession = savedSessions.find(s => s.group === group && s.lesson === lesson);

        if (existingSession) {
            topicInput.value = existingSession.topic;
            topicInput.disabled = true; 
            saveBtn.style.display = 'none'; 

            existingSession.attendance.forEach(record => {
                let tr = document.createElement('tr');
                
                let tdName = document.createElement('td');
                tdName.innerText = record.name;
                
                let tdStatus = document.createElement('td');
                tdStatus.innerText = record.present ? "present" : "";
                tdStatus.className = "status-text";

                tr.appendChild(tdName);
                tr.appendChild(tdStatus);
                tbody.appendChild(tr);
            });

        } else {
            topicInput.value = '';
            topicInput.disabled = false;
            saveBtn.style.display = 'block';

            const students = groupsData[group];
            if (!students) return;

            students.forEach(studentName => {
                let tr = document.createElement('tr');
                
                let tdName = document.createElement('td');
                tdName.innerText = studentName;
                
                let tdCheck = document.createElement('td');
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.dataset.name = studentName; 
                
                tdCheck.appendChild(checkbox);
                tr.appendChild(tdName);
                tr.appendChild(tdCheck);
                tbody.appendChild(tr);
            });
        }
    }

    function saveAttendance() {
        const group = document.getElementById('groupSelect').value;
        const lesson = document.getElementById('lessonSelect').value;
        const topic = document.getElementById('topicInput').value;
        
        if (topic.trim() === "") {
            alert("Enter lessons topic");
            return;
        }

        const tbody = document.getElementById('studentsList');
        const checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
        
        let attendanceList = [];

        checkboxes.forEach(chk => {
            attendanceList.push({
                name: chk.dataset.name,
                present: chk.checked
            });
        });

        savedSessions.push({
            group: group,
            lesson: lesson,
            topic: topic,
            attendance: attendanceList
        });

        loadLesson();
    }
