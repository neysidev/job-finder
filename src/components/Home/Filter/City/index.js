import { useState } from 'react';

import Accrodion from '../../../Elements/Accordion';
import Checkbox from '../../../Elements/Checkbox';

export default function City() {
  const [open, setOpen] = useState(true);

  const [tehran, setTehran] = useState(false);
  const [esfahan, setEsfahan] = useState(false);
  const [shiraz, setShiraz] = useState(false);
  const [other, setOther] = useState(false);

  return (
    <Accrodion.Group>
      <Accrodion.Title open={open} click={() => setOpen(!open)}>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p>City</p>
      </Accrodion.Title>
      <Accrodion.Content open={open}>
        <Checkbox
          label="Tehran"
          checked={tehran}
          change={() => setTehran(!tehran)}
        />
        <Checkbox
          label="Esfahan"
          checked={esfahan}
          change={() => setEsfahan(!esfahan)}
        />
        <Checkbox
          label="Shiraz"
          checked={shiraz}
          change={() => setShiraz(!shiraz)}
        />
        <Checkbox
          label="Other"
          checked={other}
          change={() => setOther(!other)}
        />
      </Accrodion.Content>
    </Accrodion.Group>
  );
}
