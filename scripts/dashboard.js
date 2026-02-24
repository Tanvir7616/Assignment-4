
function refreshDashboard() {

    var allCards = document.querySelectorAll('.job-card');

    var total = 0;
    var interviewCount = 0;
    var rejectedCount = 0;

    for (var i = 0; i < allCards.length; i++) {

        total++;

        var status = allCards[i].querySelector('.status-label').innerText;

        if (status === "INTERVIEW") {
            interviewCount++;
        }
        else if (status === "REJECTED") {
            rejectedCount++;
        }
    }

    document.getElementById('total-count').innerText = total;
    document.getElementById('interview-count').innerText = interviewCount;
    document.getElementById('rejected-count').innerText = rejectedCount;
}