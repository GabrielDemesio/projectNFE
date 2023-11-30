function emitirNotaFiscal() {
    const clientName = document.getElementById('clientName').value;
    const clientCPForCNPJ = document.getElementById('clientCPForCNPJ').value;
    const endereco = document.getElementById('address').value;
    const data = document.getElementById('date').value;
    const serviceName = document.getElementById('serviceName').value;
    const serviceValue = parseFloat(document.getElementById('serviceValue').value);

    // Calcular impostos
    const icms = 0.18 * serviceValue; // ICMS: 18%
    const pis = 0.0165 * serviceValue; // PIS: 1.65%

    // Calcular total
    const total = serviceValue + icms + pis;

    // Exibir na nota fiscal
    const nfDetails = document.getElementById('nfDetails');
    nfDetails.innerHTML = `
        <tr>
            <td>${clientName}</td>
            <td>${clientCPForCNPJ}</td>
            <td>${endereco}</td>
            <td>${data}</td>
            <td>${serviceName}</td>
            <td>${serviceValue.toFixed(2)}</td>
            <td>${icms.toFixed(2)}</td>
            <td>${pis.toFixed(2)}</td>
            <td>${total.toFixed(2)}</td>
        </tr>
    `;
}
