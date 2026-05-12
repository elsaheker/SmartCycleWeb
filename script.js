function hitung() {

    let hari =
        parseInt(
            document.getElementById("hari").value
        );

    let siklus =
        parseInt(
            document.getElementById("siklus").value
        );

    let mood =
        document.getElementById("mood").value;

    let prediksi = hari + siklus;

    let masaSubur = prediksi - 14;

    document.getElementById("hasil").innerHTML =

        "Prediksi haid: Hari "
        + prediksi
        + "<br>Masa subur: Hari "
        + masaSubur;

    let saran = "";

    if (mood.includes("Senang")) {

        saran =
            "Pertahankan mood kamu 💖";

    }

    else if (mood.includes("Sedih")) {

        saran =
            "Istirahat & lakukan hal yang kamu suka 🌸";

    }

    else if (mood.includes("Capek")) {

        saran =
            "Perbanyak istirahat 😴";

    }

    else {

        saran =
            "Jaga kesehatan ✨";
    }

    document.getElementById("moodResult").innerHTML =
        saran;
}
