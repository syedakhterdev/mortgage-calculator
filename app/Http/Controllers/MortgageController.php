<?php

namespace App\Http\Controllers;

use App\Mortgage;
use Illuminate\Http\Request;

class MortgageController extends Controller
{

    private  $loanAmount;
    private $totalPayments;
    private $interest;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->loanAmount = $request->principal;
        $this->totalPayments = $request->term;
        $this->interest = $request->apr/100;

        $annualPayment = round($this->__calcPayment());

        return response()->json(['totalCost' => $annualPayment*$request->term,
                                 'monthlyPayment' => round($annualPayment/12)  ]);
    }

    private function __calcPayment()
    {

        $interest  = (float) $this->interest;
        $totalPayments = (int) $this->totalPayments;
        $loanAmount = (float) $this->loanAmount;
        //***********************************************************
        //              INTEREST * ((1 + INTEREST) ^ TOTALPAYMENTS)
        // PMT = LOAN * -------------------------------------------
        //                  ((1 + INTEREST) ^ TOTALPAYMENTS) - 1
        //***********************************************************

        $value1 = $interest * pow((1 + $interest), $totalPayments);
        $value2 = pow((1 + $interest), $totalPayments) - 1;
        $pmt    = $loanAmount * ($value1 / $value2);
        return $pmt;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mortgage  $mortgage
     * @return \Illuminate\Http\Response
     */
    public function show(Mortgage $mortgage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mortgage  $mortgage
     * @return \Illuminate\Http\Response
     */
    public function edit(Mortgage $mortgage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mortgage  $mortgage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mortgage $mortgage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mortgage  $mortgage
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mortgage $mortgage)
    {
        //
    }
}
