/** 
 * Size verilen iki adet array’den
 * uygun methodları kullanarak yeni
 * bir object oluşturmanız gerekiyor.
 * Ve bu obje key-value şeklinde 
 * doğru eşleştirme yapılarak
 * oluşturulmalı. 
 */

const input = {
    "cols": ["Name Surname", "Company", "Email", "Date", "Country", "City"],
    "data": [
                ["Hyacinth Vincent", "Duis Corporation", "iaculis.enim@magnaCrasconvallis.ca", 
                "28/06/2022", "Eritrea", "Lyubertsy"],
                ["Brenden Martinez", "Volutpat Nunc Associates", "iaculis@estMauris.org", 
                "24/03/2021", "British Indian Ocean Territory", "Colwood"]
                ]
            }




var sample_output_row = [];
i = 0;
for (const element of input['data']) {
var j = 0;
for (const row of element) {
    input['cols'][j] = row
    j++
}
sample_output_row.push(input)
i++
}

console.log(sample_output_row);
