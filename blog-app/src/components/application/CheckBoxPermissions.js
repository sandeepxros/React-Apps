import Checkbox from "./Checkbox";
const list = [
  "Please Save My Data For Next Time",
  "Please Send Me Hot Job Openinigs",
  "I hereby declare that information furnished above is true\
  and correct in every respect and in case any information is\
  found incorrect even partially the candidature shall be\
  liable to be rejected.",
  "By registering my self for a job opening here. I am ready for being contacted by email or call.",
];
export default function CheckboxPermissions() { return <Checkbox labels={list} />}
