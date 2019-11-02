'use strict';

const split = (list, len) => {
    const result = [];
    const total = Math.ceil(list.length / 3);
    list = list.reverse();
    for (let i = 0; i < total; i++) {
        result.push(list.splice(0, len));
    }

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].reverse();
    }
    return result.reverse();
};

const numberInWords = (number) => {
    const numStr = number.toString();
    const satuan = ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
    const besaran = ["", "puluh", "ratus", "ribu", "juta", "miliar", "triliun"];
    const subBesaran = ["", "ribu", "juta", "miliar", "triliun"];

    const tmp = split(numStr.split(""), 3);

    for (let i = 0; i < tmp.length; i++) {
        let iLen = tmp[i].length;
        for (let j = 0; j < tmp[i].length; j++) {
            tmp[i][j] = (satuan[tmp[i][j] - 1] + " " + besaran[(iLen - 1) - j]).trim();
            if (tmp[i][j - 1] === "satu puluh") {
                if (tmp[i][j] === "satu") {
                    tmp[i][j] = "sebelas";
                    tmp[i][j - 1] = "";
                } else {
                    tmp[i][j - 1] = tmp[i][j];
                    tmp[i][j] = "belas";
                }
            }

            if (tmp[i][j].split(" ")[0] === "undefined") {
                tmp[i][j] = "";
            }

            if (tmp[i][j].split(" ")[0] === "satu" &&
                (tmp[i][j].split(" ")[1] === "ribu" || tmp[i][j].split(" ")[1] === "ratus")) {
                tmp[i][j] = "se" + tmp[i][j].split(" ")[1];
            }
        }

        if (tmp.length > 1) {
            tmp[i].push(subBesaran[(tmp.length - 1) - i]);
        }
    }
    return tmp.join(" ")
        .replace(/,/g, " ")
        .replace(/  +/g, " ")
        .trim();
};

module.exports = numberInWords;
