// TODO: answer here
function correctCapitalization(paragraph) {
    if (paragraph.length === 0) return "";

    // Memecah paragraph menjadi kalimat menggunakan regex
    const sentences = paragraph.split(/(?<=[.!?])\s+/);
    
    // Mengubah huruf pertama kalimat dan setiap huruf setelah tanda baca menjadi huruf kapital
    const correctedSentences = sentences.map(sentence => {
        // Menghapus spasi yang tidak perlu di awal kalimat
        sentence = sentence.trim();
        // Mengubah huruf pertama menjadi kapital
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });

    // Menggabungkan kembali kalimat menjadi satu paragraph
    return correctedSentences.join(" ");
}

// Mengekspor fungsi untuk digunakan di file lain
module.exports = correctCapitalization;

// Contoh penggunaan dan pengujian
console.log(correctCapitalization("ruangguru adalah sebuah perusahaan rintisan digital asal Indonesia yang bergerak di bidang pendidikan nonformal. ruangguru menawarkan platform pembelajaran berbasis kurikulum sekolah melalui video tutorial interaktif oleh guru dan animasi di aplikasi ponsel dan komputer. perusahaan ini didirikan oleh Belva Devara dan Iman Usman pada April 2014. pada tahun 2021 Ruangguru dinobatkan menjadi perusahaan paling inovatif peringkat 25 di dunia dan peringkat 2 dalam kategori pendidikan oleh Fast Company."));

console.log(correctCapitalization("neurons (also called neurones or nerve cells) are the fundamental units of the brain and nervous system, the cells responsible for receiving sensory input from the external world, for sending motor commands to our muscles, and for transforming and relaying the electrical signals at every step in between. more than that, their interactions define who we are as people. having said that, our roughly 100 billion neurons do interact closely with other cell types, broadly classified as glia (these may actually outnumber neurons, although it is not really known)."));

console.log(correctCapitalization("dendrites are appendages that are designed to receive communications from other cells. they resemble a tree-like structure, forming projections that become stimulated by other neurons and conduct the electrochemical charge to the cell body (or, more rarely, directly to the axons). the surface of the dendrites is filled with receptors that become enacted upon by neurotransmitters that traversed the synapse after the pre-synaptic neuron fired and released neurotransmitters into the synapse. dendrites integrate this stimulation (from a multitude of receptors) and play a crucial role in determining the extent to which the received stimulation will result in an action potential. although dendrites have traditionally been regarded as receivers of the neurotransmission, recent research has found that dendrites can also release neurotransmitters into the synapse. this new data adds to our understanding of the incredible complexity of neuronal transmission."));
