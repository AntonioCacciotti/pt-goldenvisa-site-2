/** Partner company name, shown as "in partnership with ...". Change it in this one place. */
export const PARTNER_NAME = "[TO BE PROVIDED: partner company name]";

/**
 * Partner page the "Continue" button opens. Change it in this one place.
 * [TO BE PROVIDED: partner page address]. While empty, the button points to "#".
 */
export const PARTNER_URL = "";

/** Referral tag appended to every link to the partner. No personal data is ever added. */
export const PARTNER_UTM = "utm_source=wonderportugal&utm_medium=referral&utm_campaign=gv-fund";

export const partnerHref = () =>
  PARTNER_URL ? `${PARTNER_URL}${PARTNER_URL.includes("?") ? "&" : "?"}${PARTNER_UTM}` : "#";

export const SITE_URL = "https://wonderportugal.com";
