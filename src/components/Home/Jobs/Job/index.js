import './style.css';
import Button from '../../../Elements/Button';
import Badge from '../../../Elements/Badge';

export default function Job({ name, location, contract, remote, immediate }) {
  return (
    <li className="job">
      <div className="job__content">
        <h2 className={`job__title ${immediate ? 'immediate' : ''}`}>
          {name}
          {immediate && <Badge color="red">immediate</Badge>}
        </h2>
        <div className="job__location">
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
          <p>{location}</p>
        </div>
        <div className="job__contract">
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <p>
            {contract} {remote && <span className="job__remote">Remote</span>}
          </p>
        </div>
      </div>
      <div className="job__actions">
        <Button block type="solid">
          Apply
        </Button>
        <Button block type="outline">
          Save
        </Button>
      </div>
    </li>
  );
}
