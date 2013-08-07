function GetAreaCode(AreaCodeValue) {
    var Result = "Region: Unknown";
    var x = 0
    $.each(AreaCode, function () {
        //alert(AreaCode.id);
        if (AreaCode[x].id == AreaCodeValue) {
            Result = "Region: " + AreaCode[x].region;
            return false;
        };
        x++;
    });
    return Result;
} //end GetAreaCode()

function RegistrationFormValidation() {

    function UpdateMessage(Str) {
        DivTopMessage.text(Str).addClass("ui-state-error");
        DivTopMessage.show();
        //DivTopMessage.text(Str).addClass("ui-state-highlight");
        //setTimeout(function () {
        //    DivTopMessage.removeClass("ui-state-highlight");
        //    DivTopMessage.addClass("ui-state-error");
        //}, 1500);
    } //end UpdateMessage()

    function CheckLength(Obj, Min, Max, ErrorMessage) {
        if (Obj.val().length > Max || Obj.val().length < Min) {
            UpdateMessage(ErrorMessage);
            Obj.addClass("ui-state-error");
            return false;
        } else {
            return true;
        } //end if
    } //end CheckLength()

    function CheckRegex(Obj, regexp, ErrorMessage) {
        if (!(regexp.test(Obj.val()))) {
            Obj.addClass("ui-state-error");
            UpdateMessage(ErrorMessage);
            return false;
        } else {
            return true;
        } //end if
    } //end CheckRegex()

    function CheckNumeric(Obj, ErrorMessage) { 
        if (isNaN(Obj.val())) { 
            Obj.addClass("ui-state-error");
            UpdateMessage(ErrorMessage);
            return false;
        } else {
            return true;
        } //end if
    } //end CheckNumeric()

    var FirstName = $("#FirstName");
    var LastName = $("#LastName");
    var Phone1 = $("#Phone1");
    var Phone2 = $("#Phone2");
    var Phone3 = $("#Phone3");
    var Email = $("#Email");
    var Age = $("#Age");
    var Gender = $("#Gender");
    var Height = $("#Height");
    var Weight = $("#Weight");
    var DivTopMessage = $("#DivTopMessage");
    var EmailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    var IsValid = true;

    var AllFields = $([]).add(FirstName)
                         .add(LastName)
                         .add(Phone1)
                         .add(Phone2)
                         .add(Phone3)
                         .add(Email)
                         .add(Age)
                         .add(Gender)
                         .add(Height)
                         .add(Weight);

    DivTopMessage.hide();
    AllFields.removeClass();

    IsValid = IsValid && CheckLength(FirstName, 1, 25, "Please enter your first name!");
    IsValid = IsValid && CheckRegex(FirstName, /^[a-zA-Z]+$/, "The first name field must contain only alphabetic characters!");

    IsValid = IsValid && CheckLength(LastName, 1, 25, "Please enter your last name!");
    IsValid = IsValid && CheckRegex(LastName, /^[a-zA-Z]+$/, "The last name field must contain only alphabetic characters!");

    if (Phone1.val() != "" || Phone2.val() != "" || Phone3.val() != "") {
        IsValid = IsValid && CheckLength(Phone1, 2, 3, "Please enter a valid area code!");
        IsValid = IsValid && CheckNumeric(Phone1, "Phone number fields must contain only numbers!");

        IsValid = IsValid && CheckLength(Phone2, 3, 3, "Phone number prefix must be 3 digits in length!");
        IsValid = IsValid && CheckNumeric(Phone2, "Phone number fields must contain only numbers!");

        IsValid = IsValid && CheckLength(Phone3, 4, 4, "Phone number suffix must be 4 digits in length!");
        IsValid = IsValid && CheckNumeric(Phone3, "Phone number fields must contain only numbers!");
    }

    IsValid = IsValid && CheckLength(Email, 1, 25, "Please enter an email address!");
    IsValid = IsValid && CheckRegex(Email, EmailRegex, "Please enter a valid email! - e.g. username@provider.com");

    IsValid = IsValid && CheckLength(Age, 1, 3, "Please enter your age!");
    IsValid = IsValid && CheckNumeric(Age, "The age field must contain only numbers!");

    IsValid = IsValid && CheckLength(Gender, 1, 25, "Please enter your gender!");
    IsValid = IsValid && CheckLength(Height, 1, 25, "Please enter your height!");
    IsValid = IsValid && CheckLength(Weight, 1, 25, "Please enter your weight!");

    if (IsValid) {
        alert("Form Validated");
    }
        
} //end RegistrationFormValidation()

var AreaCode = new Array;
AreaCode[0] = { id: "52", region: "MX" };
AreaCode[1] = { id: "55", region: "MX" };
AreaCode[2] = { id: "201", region: "NJ" };
AreaCode[3] = { id: "202", region: "DC" };
AreaCode[4] = { id: "203", region: "CT" };
AreaCode[5] = { id: "204", region: "MB" };
AreaCode[6] = { id: "205", region: "AL" };
AreaCode[7] = { id: "206", region: "WA" };
AreaCode[8] = { id: "207", region: "ME" };
AreaCode[9] = { id: "208", region: "ID" };
AreaCode[10] = { id: "209", region: "CA" };
AreaCode[11] = { id: "210", region: "TX" };
AreaCode[12] = { id: "211", region: "LOCAL" };
AreaCode[13] = { id: "212", region: "NY" };
AreaCode[14] = { id: "213", region: "CA" };
AreaCode[15] = { id: "214", region: "TX" };
AreaCode[16] = { id: "215", region: "PA" };
AreaCode[17] = { id: "216", region: "OH" };
AreaCode[18] = { id: "217", region: "IL" };
AreaCode[19] = { id: "218", region: "MN" };
AreaCode[20] = { id: "219", region: "IN" };
AreaCode[21] = { id: "224", region: "IL" };
AreaCode[22] = { id: "225", region: "LA" };
AreaCode[23] = { id: "226", region: "ON" };
AreaCode[24] = { id: "228", region: "MS" };
AreaCode[25] = { id: "229", region: "GA" };
AreaCode[26] = { id: "231", region: "MI" };
AreaCode[27] = { id: "234", region: "OH" };
AreaCode[28] = { id: "236", region: "BC" };
AreaCode[29] = { id: "239", region: "FL" };
AreaCode[30] = { id: "240", region: "MD" };
AreaCode[31] = { id: "242", region: "Bahamas" };
AreaCode[32] = { id: "246", region: "Barbados" };
AreaCode[33] = { id: "248", region: "MI" };
AreaCode[34] = { id: "250", region: "BC" };
AreaCode[35] = { id: "251", region: "AL" };
AreaCode[36] = { id: "252", region: "NC" };
AreaCode[37] = { id: "253", region: "WA" };
AreaCode[38] = { id: "254", region: "TX" };
AreaCode[39] = { id: "256", region: "AL" };
AreaCode[40] = { id: "260", region: "IN" };
AreaCode[41] = { id: "262", region: "WI" };
AreaCode[42] = { id: "264", region: "Anguilla" };
AreaCode[43] = { id: "267", region: "PA" };
AreaCode[44] = { id: "268", region: "Antigua" };
AreaCode[45] = { id: "269", region: "MI" };
AreaCode[46] = { id: "270", region: "KY" };
AreaCode[47] = { id: "276", region: "VA" };
AreaCode[48] = { id: "278", region: "MI" };
AreaCode[49] = { id: "281", region: "TX" };
AreaCode[50] = { id: "283", region: "OH" };
AreaCode[51] = { id: "284", region: "British Virgin Islands" };
AreaCode[52] = { id: "289", region: "ON" };
AreaCode[53] = { id: "301", region: "MD" };
AreaCode[54] = { id: "302", region: "DE" };
AreaCode[55] = { id: "303", region: "CO" };
AreaCode[56] = { id: "304", region: "WV" };
AreaCode[57] = { id: "305", region: "FL" };
AreaCode[58] = { id: "306", region: "SK" };
AreaCode[59] = { id: "307", region: "WY" };
AreaCode[60] = { id: "308", region: "NE" };
AreaCode[61] = { id: "309", region: "IL" };
AreaCode[62] = { id: "310", region: "CA" };
AreaCode[63] = { id: "312", region: "IL" };
AreaCode[64] = { id: "313", region: "MI" };
AreaCode[65] = { id: "314", region: "MO" };
AreaCode[66] = { id: "315", region: "NY" };
AreaCode[67] = { id: "316", region: "KS" };
AreaCode[68] = { id: "317", region: "IN" };
AreaCode[69] = { id: "318", region: "LA" };
AreaCode[70] = { id: "319", region: "IA" };
AreaCode[71] = { id: "320", region: "MN" };
AreaCode[72] = { id: "321", region: "FL" };
AreaCode[73] = { id: "323", region: "CA" };
AreaCode[74] = { id: "325", region: "TX" };
AreaCode[75] = { id: "330", region: "OH" };
AreaCode[76] = { id: "331", region: "IL" };
AreaCode[77] = { id: "334", region: "AL" };
AreaCode[78] = { id: "336", region: "NC" };
AreaCode[79] = { id: "337", region: "LA" };
AreaCode[80] = { id: "339", region: "MA" };
AreaCode[81] = { id: "340", region: "VI" };
AreaCode[82] = { id: "341", region: "CA" };
AreaCode[83] = { id: "345", region: "Cayman Islands" };
AreaCode[84] = { id: "347", region: "NY" };
AreaCode[85] = { id: "351", region: "MA" };
AreaCode[86] = { id: "352", region: "FL" };
AreaCode[87] = { id: "360", region: "WA" };
AreaCode[88] = { id: "361", region: "TX" };
AreaCode[89] = { id: "369", region: "CA" };
AreaCode[90] = { id: "380", region: "OH" };
AreaCode[91] = { id: "385", region: "UT" };
AreaCode[92] = { id: "386", region: "FL" };
AreaCode[93] = { id: "401", region: "RI" };
AreaCode[94] = { id: "402", region: "NE" };
AreaCode[95] = { id: "403", region: "AB" };
AreaCode[96] = { id: "404", region: "GA" };
AreaCode[97] = { id: "405", region: "OK" };
AreaCode[98] = { id: "406", region: "MT" };
AreaCode[99] = { id: "407", region: "FL" };
AreaCode[100] = { id: "408", region: "CA" };
AreaCode[101] = { id: "409", region: "TX" };
AreaCode[102] = { id: "410", region: "MD" };
AreaCode[103] = { id: "411", region: "Information" };
AreaCode[104] = { id: "412", region: "PA" };
AreaCode[105] = { id: "413", region: "MA" };
AreaCode[106] = { id: "414", region: "WI" };
AreaCode[107] = { id: "415", region: "CA" };
AreaCode[108] = { id: "416", region: "ON" };
AreaCode[109] = { id: "417", region: "MO" };
AreaCode[110] = { id: "418", region: "QC" };
AreaCode[111] = { id: "419", region: "OH" };
AreaCode[112] = { id: "423", region: "TN" };
AreaCode[113] = { id: "424", region: "CA" };
AreaCode[114] = { id: "425", region: "WA" };
AreaCode[115] = { id: "430", region: "TX" };
AreaCode[116] = { id: "431", region: "MB" };
AreaCode[117] = { id: "432", region: "TX" };
AreaCode[118] = { id: "434", region: "VA" };
AreaCode[119] = { id: "435", region: "UT" };
AreaCode[120] = { id: "438", region: "QC" };
AreaCode[121] = { id: "440", region: "OH" };
AreaCode[122] = { id: "441", region: "Bermuda" };
AreaCode[123] = { id: "442", region: "CA" };
AreaCode[124] = { id: "443", region: "MD" };
AreaCode[125] = { id: "450", region: "QC" };
AreaCode[126] = { id: "456", region: "Inbound International" };
AreaCode[127] = { id: "464", region: "IL" };
AreaCode[128] = { id: "469", region: "TX" };
AreaCode[129] = { id: "470", region: "GA" };
AreaCode[130] = { id: "473", region: "Grenada" };
AreaCode[131] = { id: "475", region: "CT" };
AreaCode[132] = { id: "478", region: "GA" };
AreaCode[133] = { id: "479", region: "AR" };
AreaCode[134] = { id: "480", region: "AZ" };
AreaCode[135] = { id: "484", region: "PA" };
AreaCode[136] = { id: "500", region: "Personal Communication Service" };
AreaCode[137] = { id: "501", region: "AR" };
AreaCode[138] = { id: "502", region: "KY" };
AreaCode[139] = { id: "503", region: "OR" };
AreaCode[140] = { id: "504", region: "LA" };
AreaCode[141] = { id: "505", region: "NM" };
AreaCode[142] = { id: "506", region: "NB" };
AreaCode[143] = { id: "507", region: "MN" };
AreaCode[144] = { id: "508", region: "MA" };
AreaCode[145] = { id: "509", region: "WA" };
AreaCode[146] = { id: "510", region: "CA" };
AreaCode[147] = { id: "511", region: "Nationwide Travel Information" };
AreaCode[148] = { id: "512", region: "TX" };
AreaCode[149] = { id: "513", region: "OH" };
AreaCode[150] = { id: "514", region: "QC" };
AreaCode[151] = { id: "515", region: "IA" };
AreaCode[152] = { id: "516", region: "NY" };
AreaCode[153] = { id: "517", region: "MI" };
AreaCode[154] = { id: "518", region: "NY" };
AreaCode[155] = { id: "519", region: "ON" };
AreaCode[156] = { id: "520", region: "AZ" };
AreaCode[157] = { id: "530", region: "CA" };
AreaCode[158] = { id: "539", region: "OK" };
AreaCode[159] = { id: "540", region: "VA" };
AreaCode[160] = { id: "541", region: "OR" };
AreaCode[161] = { id: "551", region: "NJ" };
AreaCode[162] = { id: "557", region: "MO" };
AreaCode[163] = { id: "559", region: "CA" };
AreaCode[164] = { id: "561", region: "FL" };
AreaCode[165] = { id: "562", region: "CA" };
AreaCode[166] = { id: "563", region: "IA" };
AreaCode[167] = { id: "564", region: "WA" };
AreaCode[168] = { id: "567", region: "OH" };
AreaCode[169] = { id: "570", region: "PA" };
AreaCode[170] = { id: "571", region: "VA" };
AreaCode[171] = { id: "573", region: "MO" };
AreaCode[172] = { id: "574", region: "IN" };
AreaCode[173] = { id: "575", region: "NM" };
AreaCode[174] = { id: "580", region: "OK" };
AreaCode[175] = { id: "585", region: "NY" };
AreaCode[176] = { id: "586", region: "MI" };
AreaCode[177] = { id: "587", region: "AB" };
AreaCode[178] = { id: "600", region: "Canadian Services" };
AreaCode[179] = { id: "601", region: "MS" };
AreaCode[180] = { id: "602", region: "AZ" };
AreaCode[181] = { id: "603", region: "NH" };
AreaCode[182] = { id: "604", region: "BC" };
AreaCode[183] = { id: "605", region: "SD" };
AreaCode[184] = { id: "606", region: "KY" };
AreaCode[185] = { id: "607", region: "NY" };
AreaCode[186] = { id: "608", region: "WI" };
AreaCode[187] = { id: "609", region: "NJ" };
AreaCode[188] = { id: "610", region: "PA" };
AreaCode[189] = { id: "612", region: "MN" };
AreaCode[190] = { id: "613", region: "ON" };
AreaCode[191] = { id: "614", region: "OH" };
AreaCode[192] = { id: "615", region: "TN" };
AreaCode[193] = { id: "616", region: "MI" };
AreaCode[194] = { id: "617", region: "MA" };
AreaCode[195] = { id: "618", region: "IL" };
AreaCode[196] = { id: "619", region: "CA" };
AreaCode[197] = { id: "620", region: "KS" };
AreaCode[198] = { id: "623", region: "AZ" };
AreaCode[199] = { id: "626", region: "CA" };
AreaCode[200] = { id: "627", region: "CA" };
AreaCode[201] = { id: "628", region: "CA" };
AreaCode[202] = { id: "630", region: "IL" };
AreaCode[203] = { id: "631", region: "NY" };
AreaCode[204] = { id: "636", region: "MO" };
AreaCode[205] = { id: "641", region: "IA" };
AreaCode[206] = { id: "646", region: "NY" };
AreaCode[207] = { id: "647", region: "ON" };
AreaCode[208] = { id: "649", region: "Turks & Caicos Islands" };
AreaCode[209] = { id: "650", region: "CA" };
AreaCode[210] = { id: "651", region: "MN" };
AreaCode[211] = { id: "660", region: "MO" };
AreaCode[212] = { id: "661", region: "CA" };
AreaCode[213] = { id: "662", region: "MS" };
AreaCode[214] = { id: "664", region: "Montserrat" };
AreaCode[215] = { id: "669", region: "CA" };
AreaCode[216] = { id: "670", region: "MP" };
AreaCode[217] = { id: "671", region: "GU" };
AreaCode[218] = { id: "678", region: "GA" };
AreaCode[219] = { id: "679", region: "MI" };
AreaCode[220] = { id: "682", region: "TX" };
AreaCode[221] = { id: "684", region: "American Samoa" };
AreaCode[222] = { id: "689", region: "FL" };
AreaCode[223] = { id: "700", region: "Interexchange Carrier Services" };
AreaCode[224] = { id: "701", region: "ND" };
AreaCode[225] = { id: "702", region: "NV" };
AreaCode[226] = { id: "703", region: "VA" };
AreaCode[227] = { id: "704", region: "NC" };
AreaCode[228] = { id: "705", region: "ON" };
AreaCode[229] = { id: "706", region: "GA" };
AreaCode[230] = { id: "707", region: "CA" };
AreaCode[231] = { id: "708", region: "IL" };
AreaCode[232] = { id: "709", region: "NL" };
AreaCode[233] = { id: "710", region: "US Government" };
AreaCode[234] = { id: "711", region: "Telecommunications Relay Services" };
AreaCode[235] = { id: "712", region: "IA" };
AreaCode[236] = { id: "713", region: "TX" };
AreaCode[237] = { id: "714", region: "CA" };
AreaCode[238] = { id: "715", region: "WI" };
AreaCode[239] = { id: "716", region: "NY" };
AreaCode[240] = { id: "717", region: "PA" };
AreaCode[241] = { id: "718", region: "NY" };
AreaCode[242] = { id: "719", region: "CO" };
AreaCode[243] = { id: "720", region: "CO" };
AreaCode[244] = { id: "724", region: "PA" };
AreaCode[245] = { id: "727", region: "FL" };
AreaCode[246] = { id: "731", region: "TN" };
AreaCode[247] = { id: "732", region: "NJ" };
AreaCode[248] = { id: "734", region: "MI" };
AreaCode[249] = { id: "737", region: "TX" };
AreaCode[250] = { id: "740", region: "OH" };
AreaCode[251] = { id: "747", region: "CA" };
AreaCode[252] = { id: "754", region: "FL" };
AreaCode[253] = { id: "757", region: "VA" };
AreaCode[254] = { id: "758", region: "St. Lucia" };
AreaCode[255] = { id: "760", region: "CA" };
AreaCode[256] = { id: "762", region: "GA" };
AreaCode[257] = { id: "763", region: "MN" };
AreaCode[258] = { id: "764", region: "CA" };
AreaCode[259] = { id: "765", region: "IN" };
AreaCode[260] = { id: "767", region: "Dominica" };
AreaCode[261] = { id: "769", region: "MS" };
AreaCode[262] = { id: "770", region: "GA" };
AreaCode[263] = { id: "772", region: "FL" };
AreaCode[264] = { id: "773", region: "IL" };
AreaCode[265] = { id: "774", region: "MA" };
AreaCode[266] = { id: "775", region: "NV" };
AreaCode[267] = { id: "778", region: "BC" };
AreaCode[268] = { id: "779", region: "IL" };
AreaCode[269] = { id: "780", region: "AB" };
AreaCode[270] = { id: "781", region: "MA" };
AreaCode[271] = { id: "784", region: "St. Vincent & Grenadines" };
AreaCode[272] = { id: "785", region: "KS" };
AreaCode[273] = { id: "786", region: "FL" };
AreaCode[274] = { id: "787", region: "PR" };
AreaCode[275] = { id: "800", region: "US/Canada Toll Free" };
AreaCode[276] = { id: "801", region: "UT" };
AreaCode[277] = { id: "802", region: "VT" };
AreaCode[278] = { id: "803", region: "SC" };
AreaCode[279] = { id: "804", region: "VA" };
AreaCode[280] = { id: "805", region: "CA" };
AreaCode[281] = { id: "806", region: "TX" };
AreaCode[282] = { id: "807", region: "ON" };
AreaCode[283] = { id: "808", region: "HI" };
AreaCode[284] = { id: "809", region: "Dominican Republic" };
AreaCode[285] = { id: "810", region: "MI" };
AreaCode[286] = { id: "812", region: "IN" };
AreaCode[287] = { id: "813", region: "FL" };
AreaCode[288] = { id: "814", region: "PA" };
AreaCode[289] = { id: "815", region: "IL" };
AreaCode[290] = { id: "816", region: "MO" };
AreaCode[291] = { id: "817", region: "TX" };
AreaCode[292] = { id: "818", region: "CA" };
AreaCode[293] = { id: "819", region: "QC" };
AreaCode[294] = { id: "828", region: "NC" };
AreaCode[295] = { id: "829", region: "Dominican Republic" };
AreaCode[296] = { id: "830", region: "TX" };
AreaCode[297] = { id: "831", region: "CA" };
AreaCode[298] = { id: "832", region: "TX" };
AreaCode[299] = { id: "835", region: "PA" };
AreaCode[300] = { id: "843", region: "SC" };
AreaCode[301] = { id: "845", region: "NY" };
AreaCode[302] = { id: "847", region: "IL" };
AreaCode[303] = { id: "848", region: "NJ" };
AreaCode[304] = { id: "849", region: "Santo Domingo" };
AreaCode[305] = { id: "850", region: "FL" };
AreaCode[306] = { id: "856", region: "NJ" };
AreaCode[307] = { id: "857", region: "MA" };
AreaCode[308] = { id: "858", region: "CA" };
AreaCode[309] = { id: "859", region: "KY" };
AreaCode[310] = { id: "860", region: "CT" };
AreaCode[311] = { id: "862", region: "NJ" };
AreaCode[312] = { id: "863", region: "FL" };
AreaCode[313] = { id: "864", region: "SC" };
AreaCode[314] = { id: "865", region: "TN" };
AreaCode[315] = { id: "867", region: "YT" };
AreaCode[316] = { id: "868", region: "Trinidad or Tobago" };
AreaCode[317] = { id: "869", region: "St. Kitts or Nevis" };
AreaCode[318] = { id: "870", region: "AR" };
AreaCode[319] = { id: "872", region: "IL" };
AreaCode[320] = { id: "876", region: "Jamaica" };
AreaCode[321] = { id: "878", region: "PA" };
AreaCode[322] = { id: "901", region: "TN" };
AreaCode[323] = { id: "902", region: "NS" };
AreaCode[324] = { id: "903", region: "TX" };
AreaCode[325] = { id: "904", region: "FL" };
AreaCode[326] = { id: "905", region: "ON" };
AreaCode[327] = { id: "906", region: "MI" };
AreaCode[328] = { id: "907", region: "AK" };
AreaCode[329] = { id: "908", region: "NJ" };
AreaCode[330] = { id: "909", region: "CA" };
AreaCode[331] = { id: "910", region: "NC" };
AreaCode[332] = { id: "911", region: "Emergency" };
AreaCode[333] = { id: "912", region: "GA" };
AreaCode[334] = { id: "913", region: "KS" };
AreaCode[335] = { id: "914", region: "NY" };
AreaCode[336] = { id: "915", region: "TX" };
AreaCode[337] = { id: "916", region: "CA" };
AreaCode[338] = { id: "917", region: "NY" };
AreaCode[339] = { id: "918", region: "OK" };
AreaCode[340] = { id: "919", region: "NC" };
AreaCode[341] = { id: "920", region: "WI" };
AreaCode[342] = { id: "925", region: "CA" };
AreaCode[343] = { id: "927", region: "FL" };
AreaCode[344] = { id: "928", region: "AZ" };
AreaCode[345] = { id: "931", region: "TN" };
AreaCode[346] = { id: "935", region: "CA" };
AreaCode[347] = { id: "936", region: "TX" };
AreaCode[348] = { id: "937", region: "OH" };
AreaCode[349] = { id: "939", region: "PR" };
AreaCode[350] = { id: "940", region: "TX" };
AreaCode[351] = { id: "941", region: "FL" };
AreaCode[352] = { id: "947", region: "MI" };
AreaCode[353] = { id: "949", region: "CA" };
AreaCode[354] = { id: "951", region: "CA" };
AreaCode[355] = { id: "952", region: "MN" };
AreaCode[356] = { id: "954", region: "FL" };
AreaCode[357] = { id: "956", region: "TX" };
AreaCode[358] = { id: "957", region: "NM" };
AreaCode[359] = { id: "959", region: "CT" };
AreaCode[360] = { id: "970", region: "CO" };
AreaCode[361] = { id: "971", region: "OR" };
AreaCode[362] = { id: "972", region: "TX" };
AreaCode[363] = { id: "973", region: "NJ" };
AreaCode[364] = { id: "975", region: "MO" };
AreaCode[365] = { id: "978", region: "MA" };
AreaCode[366] = { id: "979", region: "TX" };
AreaCode[367] = { id: "980", region: "NC" };
AreaCode[368] = { id: "984", region: "NC" };
AreaCode[369] = { id: "985", region: "LA" };
AreaCode[370] = { id: "989", region: "MI" };