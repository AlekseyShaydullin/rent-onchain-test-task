import { FC, FormEvent, useState } from 'react';

import style from './footer.module.scss';

import Contacts from './contacts/contacts';
import MenuNav from './menuNav/menuNav';
import FormFooter from '../ui/forms/formFooter/formFooter';

import { optionsContacts, optionsNav } from './config';
import Typography from '../ui/typography/typography';

interface IFooter {
  screen: string;
}

const Footer: FC<IFooter> = ({ screen }): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(true);

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({ email: email, message: message, privacy: checked });
    setEmail('');
    setMessage('');
  };

  return (
    <footer className={style.footer}>
      {screen !== 'small' ? (
        <div className={style.wrapper}>
          <div className={style.information}>
            <div className={style.basic}>
              <Contacts optionsContacts={optionsContacts} />
              <MenuNav optionsNav={optionsNav} />
            </div>
            <div className={style.secondary}>
              <Typography tag={'span'} fontFamily={'secondary'} color={'black'}>
                {'©2024 Rent Onchain'}
              </Typography>
              <Typography tag={'span'} fontFamily={'secondary'} color={'black'}>
                {'Terms and conditions'}
              </Typography>
            </div>
          </div>
          <div className={style.formBlock}>
            <FormFooter
              email={email}
              setEmail={setEmail}
              message={message}
              setMessage={setMessage}
              checked={checked}
              setChecked={setChecked}
              onSubmit={onSubmit}
            />
            <div className={style.formLinks}>
              <a href="#" className={style.link} target="_blank">
                {'Privacy policy'}
              </a>
              <a href="#" className={style.link} target="_blank">
                {'Cookie policy'}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.wrapper}>
          <div className={style.wrapper}>
            <div className={style.formBlock}>
              <FormFooter
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
                checked={checked}
                setChecked={setChecked}
                onSubmit={onSubmit}
              />
            </div>
            <div className={style.information}>
              <div className={style.basic}>
                <MenuNav optionsNav={optionsNav} />
                <Contacts optionsContacts={optionsContacts} />
              </div>
              <div className={style.footerInformation}>
                <div className={style.formLinks}>
                  <a href="#" className={style.link} target="_blank">
                    {'Privacy policy'}
                  </a>
                  <a href="#" className={style.link} target="_blank">
                    {'Cookie policy'}
                  </a>
                </div>
                <div className={style.secondary}>
                  <Typography
                    tag={'span'}
                    extraClass={style.secondary_information}
                    fontFamily={'secondary'}
                    color={'black'}
                  >
                    {'©2024 Rent Onchain'}
                  </Typography>
                  <Typography
                    tag={'span'}
                    extraClass={style.secondary_information}
                    fontFamily={'secondary'}
                    color={'black'}
                  >
                    {'Terms and conditions'}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
