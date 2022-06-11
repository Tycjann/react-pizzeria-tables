import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Config, StatusListStorage, FormErrorsMessages } from '../../../settings/settings'
import ErrorTextValidate from '../../common/ErrorTextValidate/ErrorTextValidate'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import ConditionRenderer from '../../common/ConditionRenderer/ConditionRenderer';

const TableForm = props => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [categoryId, setCategoryId] = useState(props.categoryId || '');
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || Config.peopleAmountMini);
  const [peopleAmountMax, setPeopleAmountMax] = useState(props.peopleAmount || Config.peopleAmountMax);
  const [bill, setBill] = useState(props.bill || '');

  const handleSubmit = () => {
    
  };

  // if category is cleaning or free then clean peopleAmount
  const onChangeCategory = id => {
    if (id !== 'busy') {
      setPeopleAmount('');
      setPeopleAmountMax(Config.peopleAmountMax);
    }
    setCategoryId(id);
  };

  const onChangePeopleAmount = value => {
    if (parseInt(value) > parseInt(Config.peopleAmountMax)) value = Config.peopleAmountMax;
    else if (parseInt(value) < parseInt(Config.peopleAmountMini)) value = Config.peopleAmountMini;
    if (parseInt(value) > parseInt(peopleAmountMax)) value = peopleAmountMax;

    setPeopleAmount(parseInt(value));
  };

  const onChangePeopleAmountMax = value => {
    // if (  
    //     parseInt(peopleAmount) < parseInt(value) 
    //     || parseInt(peopleAmount) === parseInt(value)+1
    //     // || parseInt(peopleAmount) === parseInt(value)-1
    // ) onChangePeopleAmount(parseInt(value));

    if (value > Config.peopleAmountMax) value = Config.peopleAmountMax;
    else if (value < Config.peopleAmountMini) value = Config.peopleAmountMini;
    setPeopleAmountMax(value);

    if (
      parseInt(peopleAmount) > parseInt(value)
    ) onChangePeopleAmount(parseInt(value));
    
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row className="mb-2 mt-2 justify-content-md-center">
        <Col sm={1} className="ps-3 fw-bold">
          <Form.Label 
            className="pt-2 align-baseline"
            htmlFor="categoryId"
          >
            Status:</Form.Label>
          </Col>
        <Col sm={4}>
          <Form.Select
            {...register("categoryId", {
              required: true,
            })}
            aria-label="Select category..."
            id="categoryId"
            name="categoryId"
            value={categoryId}
            onChange={e => onChangeCategory(e.target.value)}
          >
            <option value="">Select status...</option>
            {StatusListStorage.map(status =>
              <option key={"" + status.id + ""} value={"" + status.id + ""}>{status.name}</option>
            )}
          </Form.Select>
          {errors.categoryId && <ErrorTextValidate text={FormErrorsMessages.thisFieldRequired} />}
        </Col>
      </Row>

      <Row className="mt-4 justify-content-md-center">
        <Col sm={1} className="ps-3 fw-bold">
          <Form.Label 
            className="pt-2 align-baseline"
            htmlFor="peopleAmount"
          >
            People:</Form.Label>
        </Col>
        <Col sm={4}>
          <Row className="row justify-content-start g-0">
            <Col sm={5}>
              <Form.Control
                {...register("peopleAmount", {
                  required: true,
                  min: 1,
                })}
                className="text-center"
                aria-label="People min"
                type="number"
                id="peopleAmount"
                name="peopleAmount"
                value={peopleAmount}
                onChange={e => onChangePeopleAmount(e.target.value)}
              />
              {errors.peopleAmount
                && errors.peopleAmount.type === "required"
                && <ErrorTextValidate text={FormErrorsMessages.thisFieldRequired} />}
              {errors.peopleAmount
                && errors.peopleAmount.type === "min"
                && <ErrorTextValidate text={FormErrorsMessages.thisFieldRequired} />}
            </Col>

            <Col sm={2} className="position-relative">
              <Form.Control
                aria-label="per"
                className="
                  form-control-plaintext 
                  text-center
                  fs-2 
                  position-absolute 
                  top-50 
                  start-50 
                  translate-middle
                  bg-white
                "
                readOnly 
                type="text"
                id="peopleAmountStr"
                name="peopleAmountStr"
                value="/"
              />
              {/* <p className="fs-3">/</p> */}
            </Col>

            <Col sm={5}>
              <Form.Control
                {...register("peopleAmountMax", {
                  required: true,
                  min: 1,
                })}
                className="text-center"
                aria-label="People max"
                type="number"
                id="peopleAmountMax"
                name="peopleAmountMax"
                value={peopleAmountMax}
                onChange={e => onChangePeopleAmountMax(e.target.value)}
              />
              {errors.peopleAmountMax
                && errors.peopleAmountMax.type === "required"
                && <ErrorTextValidate text={FormErrorsMessages.thisFieldRequired} />}
              {errors.peopleAmountMax
                && errors.peopleAmountMax.type === "min"
                && <ErrorTextValidate text={FormErrorsMessages.thisFieldRequired} />}
            </Col>
          </Row>
        </Col>
      </Row>

      <ConditionRenderer condition={categoryId === 'busy'}>
        <Row className="mb-2 mt-2 justify-content-md-center">
          <Col sm={1} className="ps-3 fw-bold">
            <Form.Label 
              className="pt-2 align-baseline"
              htmlFor="bill"
            >
              Bill:
            </Form.Label>
          </Col>
          <Col sm={4}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
              <Form.Control
                {...register("bill", {
                  required: true,
                  min: 1,
                })}
                aria-label="Bill"
                type="number"
                id="bill"
                name="bill"
                value={bill}
                onChange={e => setBill(e.target.value)}
              />
            </InputGroup>
            
            {errors.bill
              && errors.bill.type === "required"
              && <ErrorTextValidate text={FormErrorsMessages.thisFieldRequired} />}
            {errors.bill
              && errors.bill.type === "min"
              && <ErrorTextValidate text={FormErrorsMessages.thisFieldRequired} />}
          </Col>
        </Row>
      </ConditionRenderer>

      <Row className="mt-4 justify-content-md-center text-end">
        <Col sm={3} className=''>
          <Button variant="primary" type="submit">Update</Button>
        </Col>
      </Row>
    </Form>

  );
};

export default TableForm;