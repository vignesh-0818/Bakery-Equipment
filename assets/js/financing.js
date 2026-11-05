/**
 * BakeTech Commercial Systems - Equipment Financing Calculator
 */

document.addEventListener('DOMContentLoaded', function () {
  initFinancingCalculator();
});

function initFinancingCalculator() {
  const amountInput = document.getElementById('calcAmountInput');
  const amountSlider = document.getElementById('calcAmountSlider');
  const termSelect = document.getElementById('calcTermSelect');
  const structureSelect = document.getElementById('calcStructureSelect');
  const creditSelect = document.getElementById('calcCreditSelect');

  const monthlyDisplay = document.getElementById('calcMonthlyPayment');
  const taxSavingsDisplay = document.getElementById('calcTaxSavings');
  const netCostDisplay = document.getElementById('calcNetCost');
  const applyBtn = document.getElementById('calcApplyBtn');

  if (!amountInput || !monthlyDisplay) return;

  function updateCalculations() {
    let amount = parseFloat(amountInput.value) || 25000;
    if (amount < 5000) amount = 5000;
    if (amount > 500000) amount = 500000;

    const term = parseInt(termSelect.value) || 36;
    const structure = structureSelect.value || 'dollar'; // 'dollar' or 'fmv'
    const credit = creditSelect.value || 'prime';        // 'prime', 'established', 'startup'

    // Rate Factor Matrix (Commercial standard lease factors)
    let baseRate = 0.033; // 36-month default
    if (term === 24) baseRate = 0.047;
    else if (term === 36) baseRate = 0.033;
    else if (term === 48) baseRate = 0.026;
    else if (term === 60) baseRate = 0.022;

    // Adjust for structure (FMV has ~10% lower payment due to residual value)
    if (structure === 'fmv') {
      baseRate *= 0.90;
    }

    // Adjust for credit tier
    if (credit === 'established') baseRate *= 1.04;
    else if (credit === 'startup') baseRate *= 1.12;

    const estimatedMonthly = amount * baseRate;

    // Section 179 Tax Savings (illustrative 21% federal corporate tax bracket)
    const estimatedTaxDeduction = amount * 0.21;
    const effectiveTotalCost = (estimatedMonthly * term) - estimatedTaxDeduction;
    const effectiveMonthly = effectiveTotalCost / term;

    // Update UI
    monthlyDisplay.textContent = '$' + Math.round(estimatedMonthly).toLocaleString();
    if (taxSavingsDisplay) {
      taxSavingsDisplay.textContent = '$' + Math.round(estimatedTaxDeduction).toLocaleString();
    }
    if (netCostDisplay) {
      netCostDisplay.textContent = '$' + Math.round(Math.max(0, effectiveMonthly)).toLocaleString();
    }
  }

  // Event Listeners
  if (amountInput && amountSlider) {
    amountInput.addEventListener('input', function () {
      amountSlider.value = this.value;
      updateCalculations();
    });

    amountSlider.addEventListener('input', function () {
      amountInput.value = this.value;
      updateCalculations();
    });
  }

  if (termSelect) termSelect.addEventListener('change', updateCalculations);
  if (structureSelect) structureSelect.addEventListener('change', updateCalculations);
  if (creditSelect) creditSelect.addEventListener('change', updateCalculations);

  // Apply button pre-fills the form below
  if (applyBtn) {
    applyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const formAmount = document.getElementById('financeEquipmentAmount');
      const formTerm = document.getElementById('financePreferredTerm');
      if (formAmount) formAmount.value = amountInput.value;
      if (formTerm) formTerm.value = termSelect.value + ' Months';

      const formSection = document.getElementById('financingFormSection');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        if (formAmount) formAmount.focus();
      }
    });
  }

  // Initial calculation
  updateCalculations();
}

