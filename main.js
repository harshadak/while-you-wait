function birthdayCountdown(daysUntilMyBirthday) {
    for (var i = daysUntilMyBirthday; i > 0; i--) {
        console.log(i + " days until my birthday");

        if (i > 30) {
            console.log("Such a long time ...");
        } else if ((i > 5) && (i < 30)) {
            console.log("I'm super excited!");
        } else {
            console.log("♪░ H░ A░ P░ P░ Y░ B░ I░ R░ T░ H░ D░ A░ Y░░♪");
        }
    }
}

birthdayCountdown(60);
