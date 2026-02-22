const donationForm = document.getElementById('donation-form');
const allocationBox = document.getElementById('allocation');

const ALLOCATION_RULES = {
  conservation: 0.55,
  yoga: 0.3,
  protocol: 0.15,
};

donationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const amountInput = document.getElementById('amount');
  const amount = Number(amountInput.value);

  if (!amount || amount <= 0) {
    allocationBox.classList.remove('hidden');
    allocationBox.innerHTML = '<p>Please enter a valid donation amount.</p>';
    return;
  }

  const conservation = (amount * ALLOCATION_RULES.conservation).toFixed(2);
  const yoga = (amount * ALLOCATION_RULES.yoga).toFixed(2);
  const protocol = (amount * ALLOCATION_RULES.protocol).toFixed(2);

  allocationBox.classList.remove('hidden');
  allocationBox.innerHTML = `
    <h4>Estimated On-Chain Allocation</h4>
    <ul>
      <li><strong>${conservation} USDT</strong> → Nature conservation grants</li>
      <li><strong>${yoga} USDT</strong> → Yoga education & community outreach</li>
      <li><strong>${protocol} USDT</strong> → Protocol maintenance & audits</li>
    </ul>
  `;
});
