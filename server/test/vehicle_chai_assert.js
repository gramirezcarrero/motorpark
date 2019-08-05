const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../.bin/www');

chai.use(chaiHttp);
chai.should();
describe("Server", () => {
    describe("restful service get /", () => {
        // Test to get all students record
        it("should get all vehicle record", (done) => {
            chai.request(server)
                .get('/api/vehicle')
                .end((err, res) => {
                    if(err) done(err)
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

    })
    it("should create a vehicle record", (done) => {
        chai.request(server)
            .post('/api/vehicles')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                'plate': 'GYT123',
                'type': 'Moto',
                'note': '',
                'status': 'in'
            })
            .end((err, res) => {
                if(err) done(err)
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
        //
    })
    it("should delete all records", (done) => {
        chai.request(server)
            .delete('/api/vehicles')
            .end((err, res) => {
                if(err){done(err)};
                res.should.have.status(204);
                done();
            });
    })
});